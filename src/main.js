import { renderHomePage } from "./home.js";
import { renderMenuPage } from "./menu.js";
import { renderContactPage } from "./contact.js";

export const domContent = document.querySelector("#content");

renderHomePage();