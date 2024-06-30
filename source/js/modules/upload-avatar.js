  const MAX_SIZE_IN_BYTES = 5242880;
  const pathToImage = './img/content/avatars/template.png';
  const avatar = document.querySelector('.avatar');

const uploadAvatar = () => {
  if (!avatar) {
    return;
  }

  const buttonEdit = avatar.querySelector('[data-avatar-edit]');
  const buttonDelete = avatar.querySelector('[data-avatar-delete]')
  const image = avatar.querySelector('label img');
  const input = avatar.querySelector('input');

  const uploadImage = (evt) => {
    const file = evt.target.files[0];

    if (file.size < MAX_SIZE_IN_BYTES) {
      image.src = URL.createObjectURL(file)
    }
  }

  input.addEventListener('change', function (evt) {
    uploadImage(evt);
  });

  buttonEdit.addEventListener('click', () => input.click());
  buttonDelete.addEventListener('click', () => image.src = pathToImage)
}

export {uploadAvatar};
