const slider = document.querySelector('.gallery-swiper');
let gallerySwiper;

const sliderInit = () => {
    gallerySwiper = new Swiper(slider, {
        autoHeight: true,
        slidesPerView: "auto",
        spaceBetween: 10,
        navigation: {
            nextEl: ".gallery-swiper-button-next",
            prevEl: ".gallery-swiper-button-prev",
        },
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth;
    if (width <= 768){
        sliderInit();
    } else {
        gallerySwiper.destroy();
    }
});