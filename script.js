const products = ["Apple", "Banana", "Carrot", "Durian", "Eggplant"];
function showSuggestions(str) {
  let productList = document.getElementById("fruitList");
  productList.innerHTML = "";

  for (let i = 0; i < products.length; i++) {
    if (products[i].toLowerCase().includes(str.toLowerCase())) {
      let product = document.createElement("div");
      product.innerHTML = products[i];
      product.addEventListener("click", function() {
        window.location.href = "product.html/" + products[i];
      });
      productList.appendChild(product);
    }
  }
}