let slideIndex = 0;
let slides = document.getElementsByClassName("slide");
let thumbs = document.getElementsByClassName("thumb");
let timer;

function showSlide(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        thumbs[i].classList.remove("active");
    }

    slides[slideIndex - 1].style.display = "block";
    thumbs[slideIndex - 1].classList.add("active");
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function currentSlide(n) {
    slideIndex = n;
    showSlide(slideIndex);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer = setInterval(nextSlide, 3000); // Change slide every 3 seconds
}

// Initialize slideshow
slideIndex = 1;
showSlide(slideIndex);
timer = setInterval(nextSlide, 3000);
