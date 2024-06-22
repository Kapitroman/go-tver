const breakpoint = window.matchMedia('(min-width:768px)');
const tagPanelSliders = document.querySelectorAll('.tag-panel');
const swipers = [];

const initSwiper = (slider) => {
  // eslint-disable-next-line no-undef

  let swiper = new Swiper(slider, {
    slidesPerView: "auto",
    freeMode: true,
    spaceBetween: 12,
  });
  swipers.push(swiper);
};

const initTagPanelSlider = () => {
  if (tagPanelSliders.length === 0) {
    return;
  }

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      swipers.forEach((item) => {
        if (item) {
          item.destroy(true, true);
        }
      })
    } else {
      tagPanelSliders.forEach((item) => initSwiper(item));
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {initTagPanelSlider};
