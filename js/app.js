/* #Banner Accordion
  ======================================================= */
if (document.querySelector('.banner .accordion')) {
  if (window.innerWidth > 1024) {
    const collapsible = document.querySelector('.banner .accordion .collapsible:first-child');
    const collapse = collapsible.querySelector('.collapse');

    collapsible.classList.add('show');
    collapse.style.height = 'auto';
  }
}

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
    slidesPerView: 'auto',
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

/* #Slideshow
  ======================================================= */
if (document.querySelector('#slideshow')) {
  (function () {
  
    // we set the 'fx' class on the first image when the page loads
    document.getElementById('slideshow').getElementsByTagName('img')[0].className = "fx";
  
    // this calls the kenBurns function every 4 seconds
    // you can increase or decrease this value to get different effects
    window.setInterval(kenBurns, 6000);
  
    // the third variable is to keep track of where we are in the loop
    // if it is set to 1 (instead of 0) it is because the first image is styled when the page loads
    var images = document.getElementById('slideshow').getElementsByTagName('img'),
      numberOfImages = images.length,
      i = 1;
  
    function kenBurns() {
      if (i == numberOfImages) {
        i = 0;
      }
      images[i].className = "fx";
  
      // we can't remove the class from the previous element or we'd get a bouncing effect so we clean up the one before last
      // (there must be a smarter way to do this though)
      if (i === 0) {
        images[numberOfImages - 2].className = "";
      }
      if (i === 1) {
        images[numberOfImages - 1].className = "";
      }
      if (i > 1) {
        images[i - 2].className = "";
      }
      i++;
  
    }
  })();
}