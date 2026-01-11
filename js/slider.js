$(document).ready(function () {

    $(".scroller").scroller();

    $('.owl-category').owlCarousel({
        items: 3,
        loop: true,
        margin: 0,
        stage: 0,
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 3500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 2
            },
            1200: {
                items: 3
            },
            1400: {
                items: 3
            }
        }
    });

    $('.owl-releases').owlCarousel({
        items: 3,
        loop: true,
        margin: 0,
        stage: 0,
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 3500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 3
            },
            1200: {
                items: 4
            },
            1400: {
                items: 4
            }
        }
    });

    $('.owl-feed').owlCarousel({
        items: 4,
        loop: true,
        margin: 20,
        stage: 0,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1200: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });

    $('.owl-choose').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        stage: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2500
    });

    $('.owl-features').owlCarousel({
        items: 3,
        loop: true,
        margin: 15,
        stage: 0,
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 3500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 3
            },
            1200: {
                items: 4
            },
            1400: {
                items: 4
            }
        }
    });

    var swiper = new Swiper(".swiper-container", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        centeredSlides: true,
        initialSlide: 2,
        loop: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 1,
            depth: 400,
            modifier: 1,
            initialSlide: 3,
            slideShadows: true
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
