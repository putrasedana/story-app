import { LitElement, html, css } from "lit";

class StyledButton extends LitElement {
  static styles = css`
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      border-radius: 6px;
      background: linear-gradient(to right, #4e4376, #2b5876);
      cursor: pointer;
      width: 50%;
      margin: 20px auto 0;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
      transition: transform 0.2s, box-shadow 0.2s;
      font-size: 1.2rem;
    }

    div:hover {
      transform: translateY(-2px);
      box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
    }

    ::slotted(button) {
      border: none;
      color: white;
      font-weight: bold;
      padding: 8px 0;
      background-color: transparent;
      cursor: pointer;
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

customElements.define("styled-button", StyledButton);
