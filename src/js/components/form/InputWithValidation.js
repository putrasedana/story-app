import { html, nothing } from "lit";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";

class InputWithValidation extends LitWithoutShadowDom {
  static properties = {
    type: { type: String, reflect: true },
    value: { type: String, reflect: true },
    inputId: { type: String, reflect: true },
    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },
    required: { type: Boolean, reflect: true },
    showPassword: { type: Boolean, reflect: true },
    isValid: { type: Boolean, reflect: true }, // New property to track validity
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();

    this.type = "text";
    this.required = false;
    this.showPassword = false;
    this.isValid = null;
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute("invalidFeedbackMessage")) {
      throw new Error(
        `Atribut "invalidFeedbackMessage" harus diterapkan pada elemen ${this.localName}`,
      );
    }
  }

  _togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  _validateInput(value) {
    if (this.required && !value) {
      this.isValid = false;
      return;
    }

    if (this.type === "password" && value.length < 8) {
      this.isValid = false;
      return;
    }

    this.isValid = true;
  }

  render() {
    return html`
      <div class="input-group">
        <input
          id=${this.inputId || nothing}
          class="form-control ${this._getValidationClass()} ${this.type ===
          "password"
            ? ""
            : "rounded"}"
          type=${this.showPassword ? "text" : this.type}
          .value=${this.value || ""}
          ?required=${this.required}
          minlength=${this.type === "password" ? "8" : nothing}
          @input=${(e) => {
            this.value = e.target.value;
            this._validateInput(this.value);
          }}
        />
        ${this.type === "password"
          ? html`
              <button
                type="button"
                class="custom-btn rounded-end"
                @click=${this._togglePasswordVisibility}
              >
                <i
                  class="bi ${this.showPassword ? "bi-eye-slash" : "bi-eye"}"
                ></i>
              </button>
            `
          : nothing}
        ${this._validFeedbackTemplate()}
        <div class="invalid-feedback">${this.invalidFeedbackMessage}</div>
      </div>
    `;
  }

  _getValidationClass() {
    if (this.isValid === null) return "";
    return this.isValid ? "is-valid" : "is-invalid";
  }

  _validFeedbackTemplate() {
    return this.validFeedbackMessage
      ? html`<div class="valid-feedback">${this.validFeedbackMessage}</div>`
      : nothing;
  }
}

customElements.define("input-with-validation", InputWithValidation);
