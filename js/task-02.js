const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("ul#ingredients");

ingredients.forEach(items =>{
  const text = document.createElement("li");
  text.textContent = items;
  list.append( text);
  
  });