import { LitElement, html, css } from "lit";

class StyledHeading extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    ::slotted(h1) {
      background: linear-gradient(to right, #ff6a00, #ee0979, #2b5876, #4e4376);
      border-radius: 6px;
      color: white;
    }
  `;

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define("styled-heading", StyledHeading);
