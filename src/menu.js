import { domContent } from "./main.js";
import imageCurry from "./img/white-curry-rice.webp";
import imageOmelet from "./img/hide-and-seek-omelet-rice.webp";
import imagePancake from "./img/reward-pancake.webp";
import imageParfait from "./img/treasure-hunt-parfait.webp";
import imageMilk from "./img/caramel-milk.webp";
import imageLatte from "./img/strawberry-latte.webp";
import imageLemonade from "./img/climbing-lemonade.webp";
import imageCocoa from "./img/warm-cocoa.webp";

const menu = {
    food: [
        {
            image: {
                src: imageCurry,
                alt: "White curry rice shaped like Chopper's face",
                width: 380,
                height: 275,
            },
            header: "Chopper's White Curry Rice",
            info: "A white curry dish shaped like Chopper's face.",
            price: 1790,
        },
        {
            image: {
                src: imageOmelet,
                alt: "Omelet rice with a small flag and paw prints leading toward a Chopper sticker",
                width: 380,
                height: 275,
            },
            header: "Chopper's Hide-and-Seek Omelet Rice",
            info: "An omelet rice plate with footprints leading to a hiding Chopper.",
            price: 1590,
        },
        {
            image: {
                src: imagePancake,
                alt: "Pancake topped with cream, fruit and a ball of pink cotton candy",
                width: 380,
                height: 275,
            },
            header: "Chopper's Reward Pancake",
            info: "A sweet pancake plate packed with all of Chopper's favorite treats.",
            price: 1590,
        },
        {
            image: {
                src: imageParfait,
                alt: "A mountain of white cotton candy on a plate with a small jug of syrup",
                width: 380,
                height: 275,
            },
            header: "Chopper's Treasure Hunt Parfait",
            info: "A parfait topped with cotton candy that reveals hidden fruits and jelly when syrup is poured over it.",
            price: 1390,
        },
    ],
    drinks: [
        {
            image: {
                src: imageMilk,
                alt: "Caramel milk in a glass topped with a large ball of pink cotton candy",
                width: 380,
                height: 275,
            },
            header: "Fluffy Mogumogu Caramel Milk",
            info: "A caramel milk drink topped with a mountain of cotton candy.",
            price: 990,
        },
        {
            image: {
                src: imageLatte,
                alt: "Pink strawberry milk latte in a glass cup with a Chopper marshmallow on top",
                width: 380,
                height: 275,
            },
            header: "Marshmallow Pukapuka Strawberry Latte",
            info: "Strawberry milk served with a random Chopper marshmallow floating on top.",
            price: 1090,
        },
        {
            image: {
                src: imageLemonade,
                alt: "Iced lemonade with a lemon slice and a pink cotton candy on the straw",
                width: 380,
                height: 275,
            },
            header: "Chopper's Climbing Lemonade",
            info: "A lemonade served with cotton candy that can be eaten separately or dissolved into the drink.",
            price: 990,
        },
        {
            image: {
                src: imageCocoa,
                alt: "Cup of cocoa with Chopper latte art",
                width: 380,
                height: 275,
            },
            header: "Chopper's Warm Cocoa",
            info: "Hot cocoa featuring random latte art.",
            price: 990,
        },
    ],
};

function createMenuCard (menuItem) {
    const domMenuItem = document.createElement("div");
    domMenuItem.classList.add("menu-item");

    const domImageItem = document.createElement("img");
    domImageItem.src = menuItem.image.src;
    domImageItem.alt = menuItem.image.alt;
    domImageItem.width = menuItem.image.width;
    domImageItem.height = menuItem.image.height;

    const domHeaderName = document.createElement("h3");
    domHeaderName.textContent = menuItem.header;

    const domTextDescription = document.createElement("p");
    domTextDescription.textContent = menuItem.info;

    if (menuItem.price >= 1000) {
        let currentStringPrice = String(menuItem.price);
        let newStringPrice = `${currentStringPrice.substring(0,1)},${currentStringPrice.substring(1)}`;
        menuItem.price = newStringPrice;
    }

    const domTextPrice = document.createElement("p");
    domTextPrice.textContent = `${menuItem.price} yen`;
    domTextPrice.classList.add("price");

    domMenuItem.append(domImageItem, domHeaderName, domTextDescription, domTextPrice);
    return domMenuItem;
}

export function renderMenuPage () {
    const domMenu = document.createElement("div");
    domMenu.id = "menu";

    const domHeaderPage = document.createElement("h1");
    domHeaderPage.textContent = "Menu";

    const domHeaderFood = document.createElement("h2");
    domHeaderFood.textContent = "Food"

    domMenu.append(domHeaderPage, domHeaderFood);
    menu.food.forEach(menuItem => domMenu.append(createMenuCard(menuItem)));

    const domHeaderDrink = document.createElement("h2");
    domHeaderDrink.textContent = "Drink"

    domMenu.append(domHeaderDrink);
    menu.drinks.forEach(menuItem => domMenu.append(createMenuCard(menuItem)));

    domContent.innerHTML = "";
    domContent.append(domMenu);
}
