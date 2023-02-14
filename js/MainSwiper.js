import "../node_modules/swiper/swiper-bundle.js";

const MainSwiper = (function () {
    function initSwiper1() {
        new Swiper(".slide-container", {
            slidesPerView: 4,
            spaceBetween: 60,
            sliderPerGroup: 4,
            loop: true,
            centerSlide: "true",
            fade: "true",
            grabCursor: "true",
            watchSlidesVisibility: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },

            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 2,
                },
                1000: {
                    slidesPerView: 3,
                },
            },
        });
    }

    function secondSwiper() {
        new Swiper(".slide-container-2", {
            slidesPerView: 4,
            spaceBetween: 60,
            sliderPerGroup: 4,
            loop: true,
            centerSlide: "true",
            fade: "true",
            grabCursor: "true",
            watchSlidesVisibility: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                dynamicBullets: true,
            },
            navigation: {
                nextEl: ".second__next",
                prevEl: ".second__prev",
            },

            breakpoints: {
                0: {
                    slidesPerView: 1,
                }
            },
        });
    }

    return {
        firstSwiper: initSwiper1,
        secondSwiper
    };
})();

export default MainSwiper;