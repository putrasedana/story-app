import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";

class CardList extends LitWithoutShadowDom {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="container">
        <div id="cardList" class="row g-3 align-items-stretch"></div>
      </div>
    `;
  }
}

customElements.define("card-list", CardList);
