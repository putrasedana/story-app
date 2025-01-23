import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class NavApp extends LitWithoutShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute("brandName")) {
      throw new Error(
        `Atribut "brandName" harus diterapkan pada elemen ${this.localName}`
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
        <span>Menu</span>
        <span>></span>
      </button>

      <div
        class="offcanvas offcanvas-start custom-offcanvas"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Story App</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <nav-links></nav-links>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("nav-app", NavApp);
