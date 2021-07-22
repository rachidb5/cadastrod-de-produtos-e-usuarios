const productName = document.getElementById("product-input");
const price = document.getElementById("price-input");
const stock = document.getElementById("stock-input");
const saveButton = document.getElementById("salvar-produto");
const productsSection = document.getElementById("products-section")
let productList = [];


function createProduct() {
    productList.push(
        JSON.stringify(
            {
                name: productName.value,
                price: price.value,
                stock: stock.value,
            }
        )
    )
    localStorage.setItem("Product", productList);
  }

  saveButton.addEventListener('click', createProduct);

  window.onload = () => {
    productList.push(localStorage.getItem('Product'));
    console.log(typeof productList)
  };