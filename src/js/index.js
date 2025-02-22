import "../sass/main.scss";
import "./components/index";
import "./utils/firebase";
import Add from "./pages/add";
import CompanyProfile from "./pages/company-profile";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";
import DetailStory from "./pages/detail-story";
import { toggleLoading } from "./utils";
import UserProfile from "./pages/user-profile";
import * as bootstrap from "bootstrap";

const routes = {
  "/": Dashboard,
  "/add.html": Add,
  "/company-profile.html": CompanyProfile,
  "/user-profile.html": UserProfile,
  "/login.html": Login,
  "/register.html": Register,
  "/detail-story.html": DetailStory,
};

const detectRoute = () => {
  const route = routes[window.location.pathname];
  if (!route) {
    console.error("Route Not Found");
    return null;
  }
  return route;
};

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
  toggleLoading(true);
  initPages();

  const route = detectRoute();
  if (route) {
    await route.init();
  }

  toggleLoading(false);
});
