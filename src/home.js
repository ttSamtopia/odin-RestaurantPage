import { domContent } from "./main.js";
import imageBanner from "./img/logo-banner.webp";
import imageSpread from "./img/menu-spread.webp";

export function renderHomePage() {
    const domHome = document.createElement("div");
    domHome.id = "home";

    const domHeaderPage = document.createElement("h1");
    domHeaderPage.textContent = "Chopper's Café";

    const domImageBanner = document.createElement("img");
    domImageBanner.src = imageBanner;
    domImageBanner.alt =
        "Chopper's Café logo surrounded by illustrations of Chopper and sweets";
    domImageBanner.width = "800";
    domImageBanner.height = "450";

    const domTextIntro = document.createElement("p");
    domTextIntro.innerHTML = `We were a One Piece cafe themed around Chopper, were he lived a peaceful life in the real world.<br/>Every dish and drink had a little bit of him in it.`;

    const domImageSpread = document.createElement("img");
    domImageSpread.src = imageSpread;
    domImageSpread.alt =
        "Menu display: curry rice, omelet rice, pancake, parfait and two drinks";
    domImageSpread.width = "640";
    domImageSpread.height = "360";

    const domTextMenu = document.createElement("p");
    domTextMenu.innerHTML = `Our curry rice was shaped like Chopper's face, and the pancake came loaded with his favorite treats.<br/>We also used a lot of cotton candy.`;

    const domHomeDates = document.createElement("div");
    domHomeDates.id = "home-dates";

    const domHeaderDates = document.createElement("h2");
    domHeaderDates.textContent = "When we were open";

    const domTextDates = document.createElement("p");
    domTextDates.innerHTML = `We were open from December 24, 2025 to February 1, 2026,<br/>at BOX cafe&space on B2F of SHIBUYA109 in Tokyo.`;

    const domTextThanks = document.createElement("p");
    domTextThanks.textContent = "Thank you to everyone who came by.";

    domHomeDates.append(domHeaderDates, domTextDates, domTextThanks);
    domHome.append(
        domHeaderPage,
        domImageBanner,
        domTextIntro,
        domImageSpread,
        domTextMenu,
        domHomeDates,
    );
    domContent.innerHTML = "";
    domContent.append(domHome);
    document.body.dataset.page = "home";
}
