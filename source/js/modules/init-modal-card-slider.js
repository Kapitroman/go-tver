const cardSliderContainer = document.querySelector('.modal-card-slider');
let swiper;
let swiper2;

const initSwiper = (slider, slider2) => {
  // eslint-disable-next-line no-undef =
  swiper2 = new Swiper(slider2, {
    spaceBetween: 10,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      768: {
        slidesPerView: 8,
      },
    }
  });

  swiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    thumbs: {
      swiper: swiper2,
    },
  });
};

const initModalCardSlider = () => {
  if (!cardSliderContainer) {
    return;
  }

  const sliderMain = cardSliderContainer.querySelector('.modal-card-slider__main');
  const sliderPreview = cardSliderContainer.querySelector('.modal-card-slider__preview');

  initSwiper(sliderMain, sliderPreview);
};

export {initModalCardSlider};
