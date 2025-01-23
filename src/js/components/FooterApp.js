import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { msg, updateWhenLocaleChanges } from "@lit/localize";

class FooterApp extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }
  render() {
    return html`
      <div class="row">
        <div class="col-md-6">
          <p>&copy; 2023 PT. Nice Story. Hak cipta dilindungi.</p>
          <p>Alamat: Jl. Contoh No. 123, Kota Jakarta</p>
          <p>Email: info@contohperusahaan.com</p>
        </div>
      </div>
    `;
  }
}

customElements.define("footer-app", FooterApp);
