document.addEventListener("DOMContentLoaded", function() {

    // 1. Circle pattern

    const header = document.querySelector(".section-header");
    const contact = document.querySelector(".contact-background");

    for (let i=1; i<=200; i++) {
        let num = Math.floor(Math.random() * (10 - 1) + 1);
        let div = document.createElement("div");
        div.classList.add("square");
        div.id = "square-" + num;
        header.appendChild(div);
    }

    for (let i=1; i<=200; i++) {
        let num = Math.floor(Math.random() * (10 - 1) + 1);
        let div = document.createElement("div");
        div.classList.add("square");
        div.id = "square-" + num;
        contact.appendChild(div);
    }

    // 2. Contact button clickhandler

    const contactButton = document.querySelector(".contact-button");
    const contactButtonTooltip = document.querySelector(".contact-button-tooltip");

    contactButton.addEventListener("click", () => {

        if (navigator.clipboard) {
            navigator.clipboard.writeText("anna.paulina.karpiuk@gmail.com");
            contactButtonTooltip.style.width = "150px";
        } else {
            contactButtonTooltip.innerText = "anna.paulina.karpiuk@gmail.com";
        }
        contactButtonTooltip.classList.add("visible");
        setTimeout(() => contactButtonTooltip.classList.remove("visible"), 1000)

    })
});