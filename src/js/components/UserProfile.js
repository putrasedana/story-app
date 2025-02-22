import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { msg, updateWhenLocaleChanges } from "@lit/localize";
import Utils from "../utils/utils";
import Config from "../config/config";
import CheckUserAuth from "../pages/check-user-auth";

class UserProfile extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
    this.userProfile = this._getUserProfile();
  }

  _getUserProfile() {
    const userProfileData = localStorage.getItem("userProfile");
    return userProfileData ? JSON.parse(userProfileData) : null;
  }

  render() {
    return html`
      <div class="container">
      <div class="row">
      <div class="col-12 col-sm-10 col-lg-8 mx-auto mb-5">
        <styled-heading>
          <h1 class="my-5 text-center">${msg("User Profile")}</h1>
        </styled-heading>

        <div class="alert alert-warning text-center" role="alert">
          🚧 ${msg("This page is under construction. Please check back later!")}
        </div>
        <div class="card" margin: auto;">
          <div class="card-body text-center">
            <img src="#" alt="User Avatar" class="rounded-circle mb-3" />
            <h5 class="card-title">
              ${this.userProfile?.name || msg("No user available")}
            </h5>
            <p class="card-text">
              ${this.userProfile?.email || msg("No email available")}
            </p>
          </div>
          <div class="card-footer text-center">
            <button class="custom-btn w-25" @click=${this._logout}>
              ${msg("Logout")}
            </button>
          </div>
          </div>
        </div>
        </div>
      </div>
    `;
  }

  _logout() {
    localStorage.removeItem("userProfile");
    Utils.destroyUserToken(Config.USER_TOKEN_KEY);
    CheckUserAuth.checkLoginState();
  }
}

customElements.define("user-profile", UserProfile);
