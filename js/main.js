document.addEventListener("DOMContentLoaded", function() {

    const cnt = document.querySelector(".section-container");
    const contact = document.querySelector(".contact");

    for (let i=1; i<=200; i++) {
        let num = Math.floor(Math.random() * (10 - 1) + 1);
        let div = document.createElement("div");
        div.classList.add("square");
        div.id = "square-" + num;
        cnt.appendChild(div);
    }


    for (let i=1; i<=200; i++) {
        let num = Math.floor(Math.random() * (10 - 1) + 1);
        let div = document.createElement("div");
        div.classList.add("square");
        div.id = "square-" + num;
        contact.appendChild(div);
    }

});