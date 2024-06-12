const userNavigationSlider = document.querySelector('.menu-user-navigation');
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

const initUserNavigationSlider = () => {
  if (!userNavigationSlider) {
    return;
  }

  initSwiper(userNavigationSlider);
};

export {initUserNavigationSlider};
