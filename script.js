document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const slides = document.querySelectorAll(".carousel-image");
    const totalSlides = slides.length;
    const carousel = document.querySelector(".carousel");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    let isTransitioning = false;

    function showSlide() {
        isTransitioning = true;
        carousel.style.transform = `translateX(${-index * 500}px)`;
        setTimeout(() => isTransitioning = false, 500);
    }

    function nextSlide() {
        if (!isTransitioning) {
            index = (index + 1) % totalSlides;
            showSlide();
        }
    }

    function prevSlide() {
        if (!isTransitioning) {
            index = (index - 1 + totalSlides) % totalSlides;
            showSlide();
        }
    }

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
});