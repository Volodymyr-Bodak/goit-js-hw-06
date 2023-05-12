const input = document.querySelector('#validation-input[data-length="6"]');
const number = input.dataset.length;
input.addEventListener('blur', () =>{
  const dataLength = input.getAttribute('data-length');

  if (input.value.length === Number(dataLength)) {
        input.classList.add('valid');
        
    } else {
        input.classList.add('invalid');
    }

});
console.log(number)