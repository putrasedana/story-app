import { LitElement, html, css } from "lit";

class CompanyProfile extends LitElement {
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
        <h1>PT. Nice Story</h1>
        <p>
          PT. Nice Story adalah perusahaan yang berfokus pada pengembangan
          teknologi inovatif untuk membantu orang-orang berbagi cerita mereka
          dengan cara yang kreatif dan inspiratif.
        </p>
        <p>
          Kami percaya bahwa setiap cerita memiliki kekuatan untuk menginspirasi
          dan mengubah dunia, dan misi kami adalah menyediakan platform terbaik
          untuk mewujudkan hal tersebut.
        </p>

        <div class="contact">
          <h2>Kontak Kami</h2>
          <p><strong>Alamat:</strong> Jl. Cerita Indah No. 10, Jakarta</p>
          <p><strong>Email:</strong> contact@nicestory.com</p>
          <p><strong>Telepon:</strong> +62 812 3456 7890</p>
        </div>
      </div>
    `;
  }
}

customElements.define("company-profile", CompanyProfile);
