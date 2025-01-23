import "../sass/main.scss";
import "./components/index";
import Add from "./pages/add";
import CompanyProfile from "./pages/company-profile";
import Dashboard from "./pages/dashboard";
import * as bootstrap from "bootstrap";

const routes = {
  "/": Dashboard,
  "/add.html": Add,
  "/company-profile.html": CompanyProfile,
};

const detectRoute = () => routes[window.location.pathname];

const initPages = () => {
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const footer = document.querySelector("footer");

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${
      header.clientHeight + footer.clientHeight
    }px)`;
  }
};

window.addEventListener("DOMContentLoaded", async () => {
  initPages();
  const route = detectRoute();
  route.init();
});
