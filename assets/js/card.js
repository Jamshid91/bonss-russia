var productSlider = new Swiper('.big-card', {
    spaceBetween: 5,
    loop:true,
    direction: 'horizontal',
    loopedSlides: 6,
    resizeObserver:true,
    slidesPerView: 1,
    navigation: {
    nextEl: '.big-card-next',
    prevEl: '.big-card-prev',
  },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    }
});
var productThumbs = new Swiper('.small-card', {
    spaceBetween: 8,
    loop: true,
    slideToClickedSlide: true,
    direction: 'vertical',
    slidesPerView: 4,
    loopedSlides: 6,        
    breakpoints: {
      0: {
        direction: 'horizontal',
      },
      1199: {
        direction: 'vertical',
      },
    }
});
productSlider.controller.control = productThumbs;
productThumbs.controller.control = productSlider;




const gallery = new Swiper('.swiper-block6', {
    loop: true,
    spaceBetween: 0,
  
    breakpoints: {
      0: {
        spaceBetween: 10,  
        slidesPerView: 1.15,
      },
      767: {
        spaceBetween: 16,  
        slidesPerView: 2.2,
      },
      1199: {
        spaceBetween: 27,  
        slidesPerView: 4,
      },
    }
  });