const controls = document.getElementById('controls');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}




function createBoxes (amount) {
  let size = 30 
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);

    size =+ 10
   }
}
function destroyBoxes()  {
  boxesContainer.innerHTML = '';
}


createBtn.addEventListener('click', () =>{
  const amount = Number(document.querySelector('input').value);
  createBoxes(amount);
});



destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});
