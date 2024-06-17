import {scrollTrigger} from './scroll-trigger';

const heroSlider = document.querySelector('.main-intro__pictures');
let swiper;

const initSwiper = (slider) => {
  // eslint-disable-next-line no-undef

  swiper = new Swiper(slider, {
    slidesPerView: "auto",
    autoplay: {
      delay: 500,
      stopOnLastSlide: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });

  swiper.autoplay.stop();

  scrollTrigger(heroSlider, {threshold: 0.8, cb: () => swiper.autoplay.start()});
};

const initHeroSlider = () => {
  if (!heroSlider) {
    return;
  }

  initSwiper(heroSlider);
};

export {initHeroSlider};
