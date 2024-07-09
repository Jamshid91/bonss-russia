const block1 = new Swiper('.swiper-block1', {
    loop: true,
    spaceBetween: 0,
    autoplayDisableOnInteraction: false,
    autoplay: {
        delay: 3000,
    }, 
      pagination: {
        el: ".swiper-pagination-block1",
        clickable: true,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
  });


  const block4 = new Swiper('.swiper-block4', {
    breakpoints: {
      0: {
        spaceBetween: 10,
        slidesPerView: 1.1,
      },
      767: {
        spaceBetween: 16,
        slidesPerView: 2.5,
      },
      991: {
        spaceBetween: 20,
        slidesPerView: 3.2,
      },
      1199: {
        spaceBetween: 20,  
        slidesPerView: 4,
      },
    }
  });