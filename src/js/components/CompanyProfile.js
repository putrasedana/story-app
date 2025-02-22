import { msg, updateWhenLocaleChanges } from "@lit/localize";
import { LitElement, html, css } from "lit";

class CompanyProfile extends LitElement {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  static styles = css`
    :host {
      display: block;
      font-family: "Arial", sans-serif;
      color: #333;
      padding: 20px;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 6px 10px rgba(0, 0, 0, 0.2);
      width: 100%;
    }

    h1 {
      font-size: 2rem;
      color: #4e4376;
      text-align: center;
      margin-bottom: 10px;
      margin-top: 0;
    }

    p {
      line-height: 1.6;
      font-size: 1.2rem;
      margin: 10px 0;
    }

    .contact {
      margin-top: 20px;
      padding: 10px;
      background: linear-gradient(to right, #4e4376, #2b5876);
      color: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }

    .contact h2 {
      margin: 0;
      font-size: 1.5rem;
    }

    .contact p {
      margin: 5px 0;
      font-size: 1rem;
    }
  `;

  render() {
    return html`
      <div>
        <h1>${msg("PT. Nice Story")}</h1>
        <p>
          ${msg(
            "PT. Nice Story is a company focused on developing innovative technology to help people share their stories in creative and inspiring ways.",
          )}
        </p>
        <p>
          ${msg(
            "We believe that every story has the power to inspire and change the world, and our mission is to provide the best platform to make that happen.",
          )}
        </p>

        <div class="contact">
          <h2>${msg("Contact Us")}</h2>
          <p>
            <strong>${msg("Address:")}</strong> ${msg(
              "Jl. Cerita Indah No. 10, Jakarta",
            )}
          </p>
          <p><strong>${msg("Email:")}</strong> contact@nicestory.com</p>
          <p><strong>${msg("Phone:")}</strong> +62 812 3456 7890</p>
        </div>
      </div>
    `;
  }
}

customElements.define("company-profile", CompanyProfile);
