const previewButtons = Array.from(document.querySelectorAll('[data-preview]'));

const clickImagePreview = () => {
  if (previewButtons.length === 0) {
    return;
  }

  const imageContainers = Array.from(document.querySelectorAll('.card-object__image'));

  const clickButtonPreviewHandler = (evt) => {
    const target = evt.target.closest('button');
    console.log(target);
    const index = previewButtons.indexOf(target);
    console.log(index);
    previewButtons.forEach((item) => item.classList.remove('is-show'));
    imageContainers.forEach((item) => item.classList.remove('is-show'));
    target.classList.add('is-show');
    console.log(imageContainers[index]);
    imageContainers[index].classList.add('is-show');
  }

  previewButtons.forEach((item) => item.addEventListener('click', clickButtonPreviewHandler));
}

export {clickImagePreview};
