const categoriesList = document.getElementById("categories");

const categoryItems = categoriesList.querySelectorAll("li.item");

console.log("Total categories:", categoryItems.length);

categoryItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector("h2").textContent;
  const subItems = categoryItem.querySelectorAll("ul li");

  console.log(`Category: ${categoryTitle}`);
  console.log(`Number of items: ${subItems.length}`);
}); 
