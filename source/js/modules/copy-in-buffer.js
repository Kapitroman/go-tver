const copyButtons = Array.from(document.querySelectorAll('[data-copy]'));

const copyInBuffer = () => {
  if (copyButtons.length === 0) {
    return;
  }

  const dataWrapper = document.querySelector('.modal-group__link-about-button-wrapper');
  const data = document.querySelector('[data-target]').innerHTML;

  const clickHandler = () => {
    navigator.clipboard.writeText(data)
      .then(() => {
        dataWrapper.classList.add('is-copied');
        setTimeout(() => dataWrapper.classList.remove('is-copied'), 1000);
      })
      .catch(() => {
        console.log('не удалось скопировать данные');
      });
  }

  copyButtons.forEach((item) => item.addEventListener('click', clickHandler));
}

export {copyInBuffer};
