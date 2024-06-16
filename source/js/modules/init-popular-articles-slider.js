const popularArticlesSlider = document.querySelector('.popular-articles__slider');
let swiper;

const initSwiper = (slider) => {
  // eslint-disable-next-line no-undef

  swiper = new Swiper(slider, {
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

const initPopularArticlesSlider = () => {
  if (!popularArticlesSlider) {
    return;
  }

  initSwiper(popularArticlesSlider);
};

export {initPopularArticlesSlider};
