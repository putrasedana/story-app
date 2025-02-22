import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { msg, updateWhenLocaleChanges } from "@lit/localize";
import Utils from "../utils/utils";
import CheckUserAuth from "../pages/check-user-auth";
import Config from "../config/config";

class NavLinkAuth extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <li class="nav-item">
        <a
          class="nav-link fw-semibold fs-5"
          id="userLogOut"
          href="#"
          @click=${this._userLogOut}
        >
          <i class="bi bi-box-arrow-right ms-3 me-2"></i>
          ${msg(`Logout`)}
        </a>
      </li>
    `;
  }

  _userLogOut(event) {
    event.preventDefault();
    Utils.destroyUserToken(Config.USER_TOKEN_KEY);
    CheckUserAuth.checkLoginState();
  }
}

customElements.define("nav-link-auth", NavLinkAuth);
