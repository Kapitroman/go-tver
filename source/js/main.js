import {mobileVhFix} from './utils/mobile-vh-fix.js';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {CustomSelect} from './modules/select/custom-select';
import {uploadFile, uploadImageDrop} from './modules/input-file/init-upload';

import {initUserNavigationSlider} from './modules/init-user-navigation-slider';
import {Burger} from './modules/burger';
import {addHeaderClass} from './modules/add-header-class';
import {initTabs} from './modules/init-tabs';
import {initNavigatorLocationSlider} from './modules/init-navigator-location-slider';
import {initPopularTouringSlider} from './modules/init-popular-touring-slider';
import {initPopularArticlesSlider} from './modules/init-popular-articles-slider';
import {initCategoriesLinksSlider} from './modules/init-categories-links-slider';
import {initHeroSlider} from './modules/init-hero-slider';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  mobileVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    uploadFile();
    uploadImageDrop();
    const select = new CustomSelect();
    select.init();
    const form = new Form();
    window.form = form;
    form.init();

    const burger = new Burger();
    burger.init();
    initUserNavigationSlider();
    addHeaderClass();
    initTabs();
    initNavigatorLocationSlider();
    initPopularTouringSlider();
    initPopularArticlesSlider();
    initCategoriesLinksSlider();
    initHeroSlider();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
