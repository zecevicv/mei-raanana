/* #Post Slider
  ======================================================= */
if (document.querySelector('.post-slider .swiper')) {
  new Swiper(".post-slider .swiper", {
    centeredSlides: true,
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1.3
      },
      1024: {
        slidesPerView: 3.77
      }
    },
    pagination: {
      el: ".post-slider .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".post-slider .next",
      prevEl: ".post-slider .prev",
    },
  });
}

/* #Banner Box Ticker
  ======================================================= */
if (document.querySelector('.banner .box-top .swiper')) {
  new Swiper(".banner .box-top .swiper", {
    loop: true,
    autoplay: {
      delay: 1,
      pauseOnMouseEnter: true,
      disableOnInteraction: false
    },
    loop: true,
    slidesPerView:'auto',
    allowTouchMove: false,
    breakpoints: {
      0: {
        speed: 8000,
      },
      1024: {
        speed: 4000,
      }
    }
  });
}