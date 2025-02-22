import Auth from "../network/auth";
import { toggleLoading } from "../utils";
import CheckUserAuth from "./check-user-auth";

const Register = {
  async init() {
    CheckUserAuth.checkLoginState();
    this._initialListener();
  },

  _initialListener() {
    const registerForm = document.querySelector("#registerForm");
    registerForm.addEventListener(
      "submit",
      async (event) => {
        event.preventDefault();
        event.stopPropagation();

        registerForm.classList.add("was-validated");
        await this._getRegistered();
      },
      false,
    );
  },

  async _getRegistered() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      console.log("formData", formData);
    }

    try {
      toggleLoading(true);
      await Auth.register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("userProfile", JSON.stringify(formData));

      this._goToLoginPage();
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
    const name = document.querySelector("#validationCustomRecordName");
    const email = document.querySelector("#validationCustomEmail");
    const password = document.querySelector("#validationCustomPassword");

    return {
      name: name.value,
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

  _goToLoginPage() {
    window.location.href = "/login.html";
  },
};

export default Register;
