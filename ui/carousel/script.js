const images = [
    {
        url: "https://images.unsplash.com/photo-1680420562679-74976cfbc0dc?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Knitting image 1"
    },
    {
        url: "https://images.unsplash.com/photo-1556095667-9760aa7f4885?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Knitting image 2"
    },
    {
        url: "https://images.unsplash.com/photo-1633008004964-730029021e62?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Knitting image 3"
    }
];

function initialize() {
    const $slides = document.querySelector("[data-carousel-slides]");
    images.forEach((img, idx) => {
        const $li = document.createElement("li");
        const $img = document.createElement("img");
        $img.src = img.url;
        $img.alt = img.alt;

        if (idx === 0) $li.setAttribute("data-active", "");
        $li.appendChild($img);
        $li.classList.add("slide");
        $slides.appendChild($li);
    });
}

const $buttons = document.querySelectorAll(".carousel-button");

$buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.classList.contains("prev") ? -1 : 1;
        // const $slides = button.closest("[data-carousel-container]").querySelector("[data-carousel-slides");
        // since there is only one carousel, we don't need to do the closest here.
        const $activeSlide = $carouselSlides.querySelector("[data-active]");

        let newIdx = offset + [...$slides.children].indexOf($activeSlide);

        if (newIdx < 0) newIdx = $slides.children.length - 1;
        if (newIdx >= $slides.children.length) newIdx = 0;
        $activeSlide.removeAttribute("data-active");
        $slides.children[newIdx].setAttribute("data-active", "");
    });
})

initialize();
// document.addEventListener("DOMContentLoaded", initialize);
// <script src="script.js" defer>... defer waits for the html to fully load before running script.