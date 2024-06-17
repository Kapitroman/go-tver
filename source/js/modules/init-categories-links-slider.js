const categoriesLinksSlider = document.querySelector('.categories-links');
let swiper;

const initSwiper = (slider) => {
  // eslint-disable-next-line no-undef

  swiper = new Swiper(slider, {
    slidesPerView: "auto",
    freeMode: true,
    spaceBetween: 24,
  });
};

const initCategoriesLinksSlider = () => {
  if (!categoriesLinksSlider) {
    return;
  }

  initSwiper(categoriesLinksSlider);
};

export {initCategoriesLinksSlider};
