const navigatorLocationSlider = document.querySelector('.navigator-location__slider');
let swiper;

const initSwiper = (slider) => {
  // eslint-disable-next-line no-undef

  swiper = new Swiper(slider, {
    slidesPerView: "auto",
    freeMode: true,
    spaceBetween: 8,
    breakpoints: {
      768: {
        spaceBetween: 24
      },
    }
  });
};

const initNavigatorLocationSlider = () => {
  if (!navigatorLocationSlider) {
    return;
  }

  initSwiper(navigatorLocationSlider);
};

export {initNavigatorLocationSlider};
