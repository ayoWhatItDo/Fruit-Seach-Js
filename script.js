const products = ["Apple", "Banana", "Carrot", "Durian", "Eggplant", "Oranges", "ayo", "lettuce", "Shrek 2 Dvd"];
function showSuggestions(str) {
  let productList = document.getElementById("fruitList");
  productList.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    if (products[i].toLowerCase().includes(str.toLowerCase())) {
      let product = document.createElement("div");
      product.classList.add("listItem");
      product.innerHTML = products[i];
      product.addEventListener("click", function() {
        window.location.href = "fruitsearch.html/" + products[i];
      });
      productList.appendChild(product);
    }
  }
}
let listItemss = getElementsByClassName("listItems");
let noResults = true;
for (i = 0; i < listItems.length; i++) { 
    if (!listItems[i].innerHTML.toLowerCase().includes(input) || input === "") {
        listItems[i].style.display="none";
        continue;
    }
    else {
        listItems[i].style.display="flex";
        noResults = false; 
    }
}
prooductList.style.display = noResults ? "none" : "block";
