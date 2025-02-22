import { html } from "lit";
import LitWithoutShadowDom from "./base/LitWithoutShadowDom";
import { msg, updateWhenLocaleChanges } from "@lit/localize";

class FooterApp extends LitWithoutShadowDom {
  constructor() {
    super();
    updateWhenLocaleChanges(this);
  }

  render() {
    return html`
      <footer>
        <div class="container px-3 py-4">
          <div class="row">
            <!-- About Us -->
            <div class="col-md-3">
              <h5>${msg("About Us")}</h5>
              <p>
                ${msg(
                  "PT. Nice Story is a fictional company engaged in technology and digital innovation.",
                )}
              </p>
            </div>

            <!-- Quick Links -->
            <div class="col-md-3">
              <h5>${msg("Quick Links")}</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-light text-decoration-none"
                    >${msg("Home")}</a
                  >
                </li>
                <li>
                  <a href="#" class="text-light text-decoration-none"
                    >${msg("Services")}</a
                  >
                </li>
                <li>
                  <a href="#" class="text-light text-decoration-none"
                    >${msg("Blog")}</a
                  >
                </li>
                <li>
                  <a href="#" class="text-light text-decoration-none"
                    >${msg("Contact")}</a
                  >
                </li>
              </ul>
            </div>

            <!-- Contact Information -->
            <div class="col-md-3">
              <h5>${msg("Contact")}</h5>
              <p>
                <i class="bi bi-geo-alt"></i> ${msg(
                  "Jl. Example No. 123, Jakarta City",
                )}
              </p>
              <p><i class="bi bi-envelope"></i> info@examplecompany.com</p>
              <p><i class="bi bi-telephone"></i> +62 812-3456-7890</p>
            </div>

            <!-- Social Media -->
            <div class="col-md-3">
              <h5>${msg("Follow Us")}</h5>
              <a href="#" class="text-light me-2"
                ><i class="bi bi-facebook fs-4"></i
              ></a>
              <a href="#" class="text-light me-2"
                ><i class="bi bi-twitter fs-4"></i
              ></a>
              <a href="#" class="text-light me-2"
                ><i class="bi bi-instagram fs-4"></i
              ></a>
              <a href="#" class="text-light"
                ><i class="bi bi-linkedin fs-4"></i
              ></a>
            </div>
          </div>

          <hr class="border-light" />

          <!-- Copyright -->
          <div class="text-center">
            <p class="mb-0">
              &copy; 2025 PT. Nice Story. ${msg("All rights reserved.")}.
            </p>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define("footer-app", FooterApp);
