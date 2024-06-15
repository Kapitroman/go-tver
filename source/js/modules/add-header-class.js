const addHeaderClass  = () => {
  const header = document.querySelector('[data-header]');

  if (!header) {
    return;
  }

  const addShadowHandler = () => {
    if (document.documentElement.scrollTop > 20) {
      header.classList.add('header--shadow');
    } else {
      header.classList.remove('header--shadow');
    }
  };

  window.addEventListener('scroll', addShadowHandler);
};

export {addHeaderClass};
