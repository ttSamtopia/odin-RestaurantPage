import { renderHomePage } from "./home.js";
import { renderMenuPage } from "./menu.js";
import { renderContactPage } from "./contact.js";

const domNavButtons = document.querySelectorAll("header > nav > button");

export const domContent = document.querySelector("#content");

function changePage(event) {
    const clickedPage = event.target.id.split("-")[1];
    switch (clickedPage) {
        case document.body.dataset.page:
            break;
        case "home":
            renderHomePage();
            disableCurrentNav(clickedPage);
            break;
        case "menu":
            renderMenuPage();
            disableCurrentNav(clickedPage);
            break;
        case "contact":
            renderContactPage();
            disableCurrentNav(clickedPage);
            break;
    }
}

function disableCurrentNav(page) {
    domNavButtons.forEach((button) => {
        if (button.id.split("-")[1] === page) {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    });
}

domNavButtons.forEach((button) => button.addEventListener("click", changePage));

renderHomePage();
disableCurrentNav("home");
