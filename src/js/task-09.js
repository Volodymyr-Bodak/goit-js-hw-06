function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('button.change-color');
button.addEventListener('click', () =>{
  document.querySelector('body').style.backgroundColor = getRandomHexColor();
  document.querySelector('span.color').textContent = getRandomHexColor();
});