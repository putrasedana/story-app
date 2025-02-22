import { LitElement, html, css } from "lit";
import { allLocales } from "../../generated/locale-codes";
import { getLocale, localeNames, setLocaleFromUrl } from "../localization.js";
import { updateWhenLocaleChanges } from "@lit/localize";

class LocalePicker extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 1rem;
      font-family: Arial, sans-serif;
    }

    .locale-container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background: var(--offcanvas-bg, transparent);
      padding: 1rem 0;
    }

    label {
      font-weight: semi-bold;
      color: var(--text-color, #fff);
      font-size: 1.2rem;
    }

    select {
      width: 100%;
      padding: 0.5rem;
      font-size: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      background: var(--select-bg, #f9f9f9);
      cursor: pointer;
      transition: all 0.2s ease-in-out;
    }

    select:focus {
      border-color: #fff;
      outline: none;
    }
  `;

  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <div class="locale-container">
        <label for="change-language">Select preferred language:</label>
        <select id="change-language" @change=${this._localeChanged}>
          ${allLocales.map((locale) => {
            return html`
              <option value=${locale} ?selected=${locale === getLocale()}>
                ${localeNames[locale]}
              </option>
            `;
          })}
        </select>
      </div>
    `;
  }

  _localeChanged(event) {
    const newLocale = event.target.value;

    if (newLocale !== getLocale()) {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", newLocale);

      window.history.pushState(null, "", url.toString());
      setLocaleFromUrl();
    }
  }
}

customElements.define("locale-picker", LocalePicker);
