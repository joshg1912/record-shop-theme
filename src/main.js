let carousel = document.querySelectorAll(".carousel");
carousel.forEach(carousel => {
    const item = carousel.querySelectorAll(".carousel-item");
    const buttonHtml = Array.from(item, () => {
        return `<span class="carousel-button"></span>`
    });

    carousel.insertAdjacentHTML("beforeend", `
    <div class="carousel-nav">
    ${buttonHtml.join("")}
    </div>`
    );

    const buttons = carousel.querySelectorAll(".carousel-button");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            item.forEach(item => item.classList.remove("is-selected"));
            buttons.forEach(button => button.classList.remove("button-selected"));

            item[i].classList.add("is-selected");
            button.classList.add("button-selected");
        });
    });
    item[0].classList.add("is-selected");
    button[0].classList.add("button-selected");
});
