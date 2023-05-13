const categoriesList = document.getElementById('categories');
const categoriesItems = categoriesList.children;

console.log(`Number of categories: ${categoriesItems.length}`);

for (let i = 0; i < categoriesItems.length; i++) {
  const categoryItem = categoriesItems[i];
  const categoryTitle = categoryItem.firstElementChild.textContent;
  const categoryItemsCount = categoryItem.querySelectorAll('li').length ;

  console.log(`Category: ${categoryTitle} \nNumber of items: ${categoryItemsCount}`);
}
