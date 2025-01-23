import { html, nothing } from "lit";
import LitWithoutShadowDom from "../base/LitWithoutShadowDom";

class InputImageWithPreview extends LitWithoutShadowDom {
  static properties = {
    inputId: { type: String, reflect: true },
    defaultImage: { type: String, reflect: true },
    defaultImageAlt: { type: String, reflect: true },
    validFeedbackMessage: { type: String, reflect: true },
    invalidFeedbackMessage: { type: String, reflect: true },
    required: { type: Boolean, reflect: true },
  };

  constructor() {
    super();

    this.type = "text";
    this.defaultImage = "";
    this.defaultImageAlt = "";
  }

  render() {
    return html`
      <div
        style="width: 50%; height: 10rem; margin: auto;"
        class="mb-3 ${!this.defaultImage ? "d-none" : ""}"
      >
        ${this._imagePreviewTemplate()}
      </div>
      <input
        type="file"
        class="form-control"
        id=${this.inputId || nothing}
        accept="image/*"
        ?required=${this.required}
        @change=${this._updatePhotoPreview}
      />

      ${this._feedbackTemplate()}
    `;
  }

  _updatePhotoPreview() {
    const ImgChange = document.querySelector("#validationCustomImageChange");
    const ImgInput = document.querySelector("#validationCustomImage");

    let RecordImg = null;
    if (this.defaultImage) {
      RecordImg = document.querySelector("#validationCustomImageRecord");
    }

    const photo = ImgInput.files[0];
    if (!photo) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      if (this.defaultImage) {
        RecordImg.classList.add("d-none");
      }
      ImgChange.parentElement.classList.remove("d-none");
      ImgChange.classList.remove("d-none");
      ImgChange.style.backgroundImage = `url('${event.target.result}')`;
    };

    reader.readAsDataURL(photo);
  }

  _feedbackTemplate() {
    let validFeedbackTemplate = "";
    let invalidFeedbackTemplate = "";
    if (this.validFeedbackMessage) {
      validFeedbackTemplate = html`
        <div class="valid-feedback">${this.validFeedbackMessage}</div>
      `;
    }
    if (this.invalidFeedbackMessage) {
      invalidFeedbackTemplate = html`
        <div class="invalid-feedback">${this.invalidFeedbackMessage}</div>
      `;
    }

    return html`${validFeedbackTemplate}${invalidFeedbackTemplate}`;
  }

  _imagePreviewTemplate() {
    const imgChangeTemplate = html`
      <div
        class="w-100 h-100 ${this.defaultImage ? "d-none" : ""}"
        style="
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        "
        id="${this.inputId || nothing}Change"
      ></div>
    `;
    if (this.defaultImage) {
      return html`
        <img
          class="img-fluid h-100"
          src="${this.defaultImage}"
          alt="${this.defaultImageAlt}"
          id="${this.inputId || nothing}Record"
        />
        ${imgChangeTemplate}
      `;
    }

    return html` ${imgChangeTemplate} `;
  }
}

customElements.define("input-image-with-preview", InputImageWithPreview);
