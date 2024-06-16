const popularTouringSlider = document.querySelector('.popular-touring__slider');
let swiper;

const initSwiper = (slider) => {
  // eslint-disable-next-line no-undef

  swiper = new Swiper(slider, {
    slidesPerView: 2,
    spaceBetween: 16,
    breakpoints: {
      480: {
        spaceBetween: 16,
        slidesPerView: 3,
      },
      768: {
        spaceBetween: 24,
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 6,
        spaceBetween: 24,
      },
    },
    navigation: {
      nextEl: slider.closest('section').querySelector('.swiper-button-next'),
      prevEl: slider.closest('section').querySelector('.swiper-button-prev'),
    },
  });
};

const initPopularTouringSlider = () => {
  if (!popularTouringSlider) {
    return;
  }

  initSwiper(popularTouringSlider);
};

export {initPopularTouringSlider};
