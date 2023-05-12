const input = document.querySelector('input#name-input');
const valueEl = document.querySelector('span#name-output');
input.addEventListener('input', () =>{
  if (!input.value) {
 valueEl.textContent = "Anonymous";
    
} else {
    valueEl.textContent = input.value.trim();

}});