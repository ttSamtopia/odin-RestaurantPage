import { domContent } from "./main.js";
import imageChopper from "./img/chopper-sitting.png"

export function renderContactPage () {
    const domContact = document.createElement("div");
    domContact.id = "contact";
    
    const domHeaderPage = document.createElement("h1");
    domHeaderPage.textContent = "Contact";

    const domImageChopper = document.createElement("img");
    domImageChopper.src = imageChopper;
    domImageChopper.alt = "Chopper sitting under the CHOPPER's logo on a pale yellow background";
    domImageChopper.width = "512";
    domImageChopper.height = "288";

    const domHeaderPlace = document.createElement("h2");
    domHeaderPlace.textContent = "Where we were"

    const domTextPlace = document.createElement("p");
    domTextPlace.textContent = "BOX cafe&space on B2F of SHIBUYA109 in Tokyo";

    const domHeaderDates = document.createElement("h2");
    domHeaderDates.textContent = "When we were open"

    const domTextDates = document.createElement("p");
    domTextDates.textContent = "December 24, 2025 to February 1, 2026";

    const domHeaderReservations = document.createElement("h2");
    domHeaderReservations.textContent = "Reservations"

    const domTextReservationDate = document.createElement("p");
    domTextReservationDate.textContent = "Reservations opened on December 9 at 18:00 (JST).";

    const domTextReservationBooking = document.createElement("p");
    domTextReservationBooking.innerHTML = `Guests booked through our official website: <a href="https://choppers-onepiece.theme-cafe.jp/" target="_blank" rel="noopener noreferrer">choppers-onepiece.theme-cafe.jp</a>`;

    domContact.append(domHeaderPage, domImageChopper, domHeaderPlace, domTextPlace, domHeaderDates, domTextDates, domHeaderReservations, domTextReservationDate, domTextReservationBooking);
    domContent.innerHTML = "";
    domContent.append(domContact);
    document.body.dataset.page = "contact";
}