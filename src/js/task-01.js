const items = document.querySelectorAll('li.item');
console.log( `Number of categories: ${items.length}`);
const allCategories = document.querySelectorAll('ul#categories li.item');
allCategories.forEach(item => {
    console.log( `Category : ${item.querySelector('h2').textContent}`);
    console.log (`Elements: ${item.querySelectorAll('li').length}`);
});