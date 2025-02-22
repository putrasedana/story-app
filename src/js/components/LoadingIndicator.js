import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { msg, updateWhenLocaleChanges } from "@lit/localize";

class LoadingIndicator extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="text-center" id="loading">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">${msg("Loading...")}</span>
        </div>
        <p>${msg("Now Loading...")}</p>
      </div>
    `;
  }
}

customElements.define("loading-indicator", LoadingIndicator);
