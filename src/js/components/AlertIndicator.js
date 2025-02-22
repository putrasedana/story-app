import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class AlertIndicator extends LitWithoutShadowDom {
  constructor() {
    super();
  }

  render() {
    return html`
      <div
        id="alert"
        class="alert alert-danger d-none w-100 text-center"
        role="alert"
      >
        <p id="alert-text" class="m-0 fs-5"></p>
      </div>
    `;
  }
}

customElements.define("alert-indicator", AlertIndicator);
