import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class NavLink extends LitWithoutShadowDom {
  static properties = {
    content: { type: String, reflect: true },
    to: { type: String, reflect: true },
    icon: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute("to")) {
      throw new Error(
        `Atribut "to" harus diterapkan pada elemen ${this.localName}`,
      );
    }
  }

  render() {
    return html`
      <li class="nav-item">
        <a class="nav-link fw-semibold fs-5" href="${this.to}"
          ><i class="${this.icon} ms-3 me-2"></i> ${this.content}</a
        >
      </li>
    `;
  }
}

customElements.define("nav-link", NavLink);
