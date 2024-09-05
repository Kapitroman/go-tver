const articlesSlider = document.querySelector('.articles-slider__container');
let swiper;

const initSwiper = (slider) => {
  // eslint-disable-next-line no-undef

  swiper = new Swiper(slider, {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      768: {
        spaceBetween: 24,
        slidesPerView: 2,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
    navigation: {
      nextEl: slider.closest('section').querySelector('.swiper-button-next'),
      prevEl: slider.closest('section').querySelector('.swiper-button-prev'),
    },
  });
};

const initArticlesSlider = () => {
  if (!articlesSlider) {
    return;
  }

  initSwiper(articlesSlider);
};

export { initArticlesSlider };
