const $buttons = document.querySelectorAll(".carousel-button");

$buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.classList.contains("prev") ? -1 : 1;
        const $slides = button.closest("[data-carousel-container").querySelector("[data-carousel-slides");
        const $activeSlide = $slides.querySelector("[data-active]");

        let newIdx = offset + [...$slides.children].indexOf($activeSlide);

        if (newIdx < 0) newIdx = $slides.children.length - 1;
        if (newIdx >= $slides.children.length) newIdx = 0;
        $slides.children[newIdx].dataset.active = true;
        delete $activeSlide.dataset.active;
    });
})
