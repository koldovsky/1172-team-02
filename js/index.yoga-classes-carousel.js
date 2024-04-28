const slides = [
    `<ul class="carousel__track">
    <li class="carousel__slide">
        <img src="img/main/prenatal-yoga.webp" alt="Prenatal Yoga" class="carousel__image">
        <span class="carousel__plan">LEVELS 1</span>
        <span class="carousel__title">Prenatal Yoga</span>
    </li>
    <li class="carousel__slide">
        <img src="img/main/viniasa-yoga.webp" alt="Viniasa Yoga" class="carousel__image">
        <span class="carousel__plan">LEVELS 1-3</span>
        <span class="carousel__title">Vinyasa Yoga</span>
    </li>
    <li class="carousel__slide">
        <img src="img/main/ashthanga-yoga.webp" alt="Ashthanga Yoga" class="carousel__image">
        <span class="carousel__plan">ALL LEVELS</span>
        <span class="carousel__title">Ashtanga Yoga</span>
    </li>
    <li class="carousel__slide">
        <img src="img/main/basic-yoga.webp" alt="Basic Yoga" class="carousel__image">
        <span class="carousel__plan">LEVELS 1</span>
        <span class="carousel__title">Yoga Basics</span>
    </li>
    <li class="carousel__slide">
        <img src="img/main/yin-yoga.webp" alt="Yin Yoga" class="carousel__image">
        <span class="carousel__plan">ALL LEVELS</span>
        <span class="carousel__title">Yin Yoga</span>
    </li>
    <li class="carousel__slide">
        <img src="img/main/hatha-yoga.webp" alt="Hatha Yoga" class="carousel__image">
        <span class="carousel__plan">ALL LEVELS</span>
        <span class="carousel__title">Hatha Yoga</span>
    </li>
</ul>`
];

let currentSlideIdx = 0;

function renderSlide() {
    const slideContainer = document.querySelector('.product-carousel__slides');
    slideContainer.innerHTML = slides[currentSlideIdx];
    if (window.matchMedia('(min-width:790px)').matches) {
        const secondSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        slideContainer.innerHTML += slides[secondSlideIdx];
        if (window.matchMedia('(min-width:1002px)').matches) {
            const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
            slideContainer.innerHTML += slides[thirdSlideIdx];
        }
    }
}

function nextSlide() {
    currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
    renderSlide();
}

function prevSlide() {
    currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
    renderSlide();
}

setInterval(nextSlide, 3000);
renderSlide();

const nextBtn = document.querySelector('.product-carousel__btn-next');
nextBtn.addEventListener('click', nextSlide);

const prevBtn = document.querySelector('.product-carousel__btn-prev');
prevBtn.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);