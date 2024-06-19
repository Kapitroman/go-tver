const breakpoint = window.matchMedia('(min-width:768px)');
const cardGridToSlider = document.querySelector('.card-grid-to-slider');
let swiper;

const initSwiper = (slider) => {
  // eslint-disable-next-line no-undef

  swiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      560: {
        spaceBetween: 16,
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: slider.closest('section').querySelector('.swiper-button-next'),
      prevEl: slider.closest('section').querySelector('.swiper-button-prev'),
    },
  });
};

const initCardGridToSlider = () => {
  if (!cardGridToSlider) {
    return;
  }

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      if (swiper) {
        swiper.destroy(true, true);
      }
    } else {
      initSwiper(cardGridToSlider);
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {initCardGridToSlider};
