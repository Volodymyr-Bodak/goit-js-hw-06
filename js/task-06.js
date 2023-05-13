const input = document.querySelector('#validation-input[data-length="6"]');
input.addEventListener('blur', () =>{
  const dataLength = input.getAttribute('data-length');

  if (input.value.length === Number(dataLength)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }

});
