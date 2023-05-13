const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("ul#ingredients");

const amount = ingredients.map(items => {
  const text = document.createElement("li");
  text.textContent = items;
  text.classList.add("item");
  return text;
});

list.append(...amount); 
