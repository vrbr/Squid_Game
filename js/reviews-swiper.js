const reviewsSwiper = new Swiper(".reviews-swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    initialSlide: 2,
    loop: true,
    navigation: {
        nextEl: ".reviews-swiper-button-next",
        prevEl: ".reviews-swiper-button-prev",
    },
    pagination: {
        el: ".reviews-swiper-pagination",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 25,
        },
    },
});