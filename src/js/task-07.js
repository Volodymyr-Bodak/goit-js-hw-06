const input = document.querySelector('input#font-size-control');
const magic = document.querySelector('span#text');
input.addEventListener('input', ()=>{
    magic.style.fontSize = `${Number(input.value)}px`;
})