let counterValue = 0;
const valueEl = document.querySelector('#value');

const decrementButton = counter.querySelector('[data-action="decrement"]');
const incrementButton = counter.querySelector('[data-action="increment"]');
decrementButton.addEventListener('click', () => {
    
    counterValue--;
    
    
    valueEl.textContent = counterValue;
  });

incrementButton.addEventListener('click', () =>{
    counterValue++;
    valueEl.textContent = counterValue;
})