const mainSlider = document.querySelector('.modal-main-slider');
let swiper;

const initSwiper = (slider) => {
  // eslint-disable-next-line no-undef

  swiper = new Swiper(slider, {
    slidesPerView: 1,
    navigation: {
      nextEl: slider.closest('.modal').querySelector('.swiper-button-next'),
      prevEl: slider.closest('.modal').querySelector('.swiper-button-prev'),
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

const initMainSlider = () => {
  if (!mainSlider) {
    return;
  }

  initSwiper(mainSlider);
};

export {initMainSlider};
