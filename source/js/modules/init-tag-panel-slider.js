const breakpoint = window.matchMedia('(min-width:767px)');
const tagPanelSlider = document.querySelector('.tag-panel');
let swiper;

const initSwiper = (slider) => {
  // eslint-disable-next-line no-undef

  swiper = new Swiper(slider, {
    slidesPerView: "auto",
    freeMode: true,
    spaceBetween: 12,
  });
};

const initTagPanelSlider = () => {
  if (!tagPanelSlider) {
    return;
  }

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      if (swiper) {
        swiper.destroy(true, true);
      }
    } else {
      initSwiper(tagPanelSlider);
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {initTagPanelSlider};
