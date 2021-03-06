const bigSwiper = new Swiper('.big-carousel', {
    slidesPerView: 1,
    spaceBetween: 0,
    initialSlide: 0,


    pagination: {
      el: '.swiper-pagination',
    },  
    breakpoints: {
      900: {
        initialSlide: 1,
        slidesPerView: 1.6,
        centeredSlides: true,
        centeredSlidesBounds: true,
      },
    }
  });

  const smallSwiper = new Swiper('.small-carousel', {
    slidesPerView: 1.2,
    spaceBetween: 10,
    
 

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
    600: {
      slidesPerView: 2,
      },
      800: {
        slidesPerView:2.4,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 3.2,
        spaceBetween: 15,
        },
    }
  });