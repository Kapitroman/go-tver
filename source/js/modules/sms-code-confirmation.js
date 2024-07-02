const codeConfirmationForm = document.querySelector('.modal--sms-code form');

const smsCodeConfirmation = () => {
  if (!codeConfirmationForm) {
    return;
  }

  const codeConfirmationFormInputs = codeConfirmationForm.querySelectorAll('input');

  codeConfirmationFormInputs.forEach((codeInput, key) => codeInput.addEventListener('input', e => {
      e.target.value.length > 1 && (e.target.value = e.target.value.slice(0, 1))
      if (isFinite(+e.target.value)) {
        e.target.value.length === 1 && codeConfirmationFormInputs[key + 1]?.focus()
      }
  }))

  codeConfirmationFormInputs.forEach((codeInput, key) => codeInput.addEventListener('paste', e => {
    e.preventDefault();

    let dataInsert = e.clipboardData.getData('text/plain');

    if (dataInsert.length > 4) {
      dataInsert.slice(0, 4);
    }

    if (dataInsert.length < 4) {
      dataInsert.padEnd(4, '0');
    }

    codeConfirmationFormInputs.forEach((codeInput, key) => {
      if (!isFinite(dataInsert[key])) {
        codeInput.value = 0;
      } else {
        codeInput.value = dataInsert[key];
      }
    })
  }))
}

export {smsCodeConfirmation};
