let currentSlide = 0; // Index of the current slide
const slides = document.querySelectorAll('.slide'); // Select all slides

function showSlide(slideName) {
    // Hide all slides
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Show the corresponding slide
    document.querySelector(`.${slideName}-slide`).classList.add('active');
}

function changeSlide(direction) {
    // Hide all slides
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Calculate new slide index
    currentSlide += direction;

    // Loop around if index is out of bounds
    if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Wrap to last slide
    } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Reset to first slide
    }

    // Show the current slide
    slides[currentSlide].classList.add('active');
}

// Initially show the first slide
showSlide('stats');