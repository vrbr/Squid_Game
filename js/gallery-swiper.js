document.addEventListener('DOMContentLoaded', () => {
    const width = window.innerWidth;
    if (width < 768){
        const slider = document.querySelector('.gallery-swiper');

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
        sliderInit();
    }
});