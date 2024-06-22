const favoriteButtons = Array.from(document.querySelectorAll('[data-favorite]'));

const toggleFavorite = () => {
  if (!favoriteButtons.length === 0) {
    return;
  }

  const clickFavoriteButtonHandler = (evt) => {
    evt.preventDefault();
    const parent = evt.target.closest('.item-favorite');
    parent.classList.toggle('is-favorite');
  }

  favoriteButtons.forEach((item) => item.addEventListener('click', clickFavoriteButtonHandler));
}

export {toggleFavorite};
