import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { msg, updateWhenLocaleChanges } from "@lit/localize";

class NavApp extends LitWithoutShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
  };

  constructor() {
    super();
    updateWhenLocaleChanges(this);
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute("brandName")) {
      throw new Error(
        `Atribut "brandName" harus diterapkan pada elemen ${this.localName}`,
      );
    }
  }

  render() {
    return html`
      <button
        class="offcanvas-btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <span>${msg("Menu")}</span>
        <span>></span>
      </button>

      <div
        class="offcanvas offcanvas-start custom-offcanvas custom-offcanvas"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h3 class="offcanvas-title" id="offcanvasExampleLabel">Story App</h3>
          <button
            type="button"
            class="btn-close text-reset text-white bg-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <nav-links></nav-links>
          <locale-picker></locale-picker>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("nav-app", NavApp);
