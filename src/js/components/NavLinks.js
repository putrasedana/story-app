import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { msg, updateWhenLocaleChanges } from "@lit/localize";

class NavLinks extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <ul class="navbar-nav d-flex gap-3 list-group">
        <nav-link
          content="${msg(`Homepage`)}"
          to="/"
          icon="bi bi-house-door"
        ></nav-link>
        <nav-link
          content="${msg(`Add Story`)}"
          to="/add.html"
          icon="bi bi-pencil"
        ></nav-link>
        <nav-link
          content="${msg(`User Profile `)}"
          to="/user-profile.html"
          icon="bi bi-person"
        ></nav-link>
        <nav-link
          content="${msg(`Company Profile`)}"
          to="/company-profile.html"
          icon="bi bi-buildings"
        ></nav-link>
        <nav-link-auth id="userLoggedMenu"></nav-link-auth>
      </ul>
    `;
  }
}

customElements.define("nav-links", NavLinks);
