const block9 = new Swiper('.swiper-block9', {
    loop: false,
    navigation: {
        nextEl: '.block9-next',
        prevEl: '.block9-prev',
      },

      breakpoints: {
        0: {
          spaceBetween: 10,
          slidesPerView: 1,
        },
        576: {
          spaceBetween: 16,
          slidesPerView: 1.6,
        },
        767: {
          spaceBetween: 16,
          slidesPerView: 2.5,
        },
        991: {
          spaceBetween: 20,  
          slidesPerView: 3,
        },
      }
  });