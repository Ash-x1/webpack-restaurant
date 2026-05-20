import "./style.css";

import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";

function switchPage(page) {
  content.textContent = "";
  content.appendChild(page());
}

document.getElementById("home-page").addEventListener("click", () => {
  switchPage(homePage);
});

document.getElementById("menu-page").addEventListener("click", () => {
  switchPage(menuPage);
});

document.getElementById("contact-page").addEventListener("click", () => {
  switchPage(contactPage);
})


