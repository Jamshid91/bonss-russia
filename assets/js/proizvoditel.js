const block7 = new Swiper('.swiper-block7', {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: {
        nextEl: '.block7-next',
        prevEl: '.block7-prev',
      },
  });


  const block8 = new Swiper('.swiper-block8', {
    navigation: {
        nextEl: '.block7-next',
        prevEl: '.block7-prev',
      },

      breakpoints: {
        0: {
          spaceBetween: 10,
          slidesPerView: 1.7,
          loop: true,
        },
        767: {
          spaceBetween: 16,
          slidesPerView: 2.5,
          loop: true,
        },
        991: {
          spaceBetween: 20,
          slidesPerView: 2.5,
          loop: true,
        },
        1199: {
          spaceBetween: 20,  
          slidesPerView: 3,
          loop: false,
        },
      }
  });