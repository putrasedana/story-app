import Config from "../config/config";
import Auth from "../network/auth";
import { toggleLoading } from "../utils";
import Utils from "../utils/utils";
import CheckUserAuth from "./check-user-auth";

const Login = {
  async init() {
    CheckUserAuth.checkLoginState();
    this._initialListener();
  },

  _initialListener() {
    const loginForm = document.querySelector("#loginForm");
    loginForm.addEventListener(
      "submit",
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        loginForm.classList.add("was-validated");
        await this._getLogged();
      },
      false,
    );

    const guestLoginButton = document.querySelector("#loginAsGuestButton");
    if (guestLoginButton) {
      guestLoginButton.addEventListener("click", async () => {
        toggleLoading(true);
        await this._loginAsGuest();
        toggleLoading(false);
      });
    }
  },

  async _checkAndRegisterGuest() {
    try {
      await this._loginAsGuest();
    } catch (error) {
      console.warn("Guest login gagal, mencoba register...");

      try {
        await Auth.register({
          name: "Guest User",
          email: "guest@yourapp.com",
          password: "guest123",
        });

        console.log("Registrasi guest berhasil, mencoba login...");
        await this._loginAsGuest();
      } catch (registerError) {
        console.error("Gagal register guest:", registerError.message);
      }
    }
  },

  async _loginAsGuest() {
    try {
      const response = await Auth.login({
        email: "guest@yourapp.com",
        password: "guest123",
      });

      Utils.setUserToken(Config.USER_TOKEN_KEY, response.loginResult.token);
      console.log("Login sebagai guest berhasil");
      this._goToDashboardPage();
    } catch (error) {
      throw new Error("Gagal login sebagai guest");
    }
  },

  async _getLogged() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      console.log("formData");
      console.log(formData);
    }

    try {
      toggleLoading(true);
      const response = await Auth.login({
        email: formData.email,
        password: formData.password,
      });
      Utils.setUserToken(Config.USER_TOKEN_KEY, response.loginResult.token);
      this._goToDashboardPage();
    } catch (error) {
      console.error(error);

      const alertElement = document.getElementById("alert");
      const alertText = document.getElementById("alert-text");
      if (alertElement) {
        alertText.textContent = error.message;
        alertElement.classList.remove("d-none");
      }
    } finally {
      toggleLoading(false);
    }
  },

  _getFormData() {
    const email = document.querySelector("#validationCustomRecordEmail");
    const password = document.querySelector("#validationCustomPassword");

    return {
      email: email.value,
      password: password.value,
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter(
      (item) => item === "",
    );

    return formDataFiltered.length === 0;
  },

  _goToDashboardPage() {
    window.location.href = "/";
  },
};

export default Login;
