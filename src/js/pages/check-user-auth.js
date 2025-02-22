import Config from "../config/config";
import Utils from "../utils/utils";

const CheckUserAuth = {
  excludeRedirectPage: ["login.html", "register.html"],

  checkLoginState() {
    const userToken = Utils.getUserToken(Config.USER_TOKEN_KEY);
    const isUserSignIn = Boolean(userToken);
    const isUserOnAuthPage = this._isUserOnAuthPage(this.excludeRedirectPage);

    if (isUserSignIn) {
      if (isUserOnAuthPage) {
        window.location.replace("/");
      } else {
        this._showLoginMenuOrUserLogMenu(isUserSignIn);
      }
    } else {
      if (!isUserOnAuthPage) {
        window.location.href = "/login.html";
      }
    }
  },

  _showLoginMenuOrUserLogMenu(userLoginState) {
    const loginMenu = document.querySelector("#loginMenu");
    const userLoggedMenu = document.querySelector("#userLoggedMenu");

    if (!userLoginState) {
      loginMenu?.classList.add("d-block");
      userLoggedMenu?.classList.add("d-none");

      loginMenu?.classList.remove("d-none");
      userLoggedMenu?.classList.remove("d-block");

      return;
    }

    loginMenu?.classList.add("d-none");
    userLoggedMenu?.classList.add("d-block");

    loginMenu?.classList.remove("d-block");
    userLoggedMenu?.classList.remove("d-none");
  },

  _isUserOnAuthPage(pages) {
    const filteredPages = pages.filter((item) =>
      window.location.pathname.endsWith(item),
    );
    return Boolean(filteredPages.length);
  },
};

export default CheckUserAuth;
