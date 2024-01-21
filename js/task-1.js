const categoriesList = document.getElementById("categories");

const categoriesItems = categoriesList.querySelectorAll("li.item");

console.log(`Total categories: ${categoriesItems.length}`);

categoriesItems.forEach(category => {
  const categoryTitle = category.querySelector("h2").textContent;
  const subItems = categoryItem.querySelectorAll("ul li");

  console.log(`Category: ${categoryTitle}`);
  console.log(`Number of items: ${subItems.length}`);
});






