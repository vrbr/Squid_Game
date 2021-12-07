const gallerySwipe = new Swiper(".gallery-swiper", {
    autoHeight: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    navigation: {
        nextEl: ".gallery-swiper-button-next",
        prevEl: ".gallery-swiper-button-prev",
    },
});