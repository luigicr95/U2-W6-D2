let productList = [
  {
    name: "TLOU Parte II",
    price: 79.99,
    image:
      "https://m.media-amazon.com/images/I/61KcDlZIP3L._CR0,412,1060,1060_UX256.jpg",
  },
  {
    name: "TLOU Parte I",
    price: 59.99,
    image:
      "https://m.media-amazon.com/images/I/61KcDlZIP3L._CR0,412,1060,1060_UX256.jpg",
  },
  {
    name: "Overwatch 2",
    price: 130,
    image:
      "https://m.media-amazon.com/images/I/61KcDlZIP3L._CR0,412,1060,1060_UX256.jpg",
  },
  {
    name: "Horizon",
    price: 120,
    image:
      "https://m.media-amazon.com/images/I/61KcDlZIP3L._CR0,412,1060,1060_UX256.jpg",
  },
  {
    name: "Rainbow Six",
    price: 110,
    image:
      "https://m.media-amazon.com/images/I/61KcDlZIP3L._CR0,412,1060,1060_UX256.jpg",
  },
];

function visualizeProducts() {
  document.getElementById("shelf").innerHTML = "";

  //1. Un ciclo per ogni elemento della lista
  for (let index = 0; index < productList.length; index++) {
    const product = productList[index];

    let searchQuery = document.getElementById("product-id").value;

    if (product.name.includes(searchQuery)) {
      //2.una div con classe card e le varie div all'interno

      let productDiv = `
          <div class="card product-card">
          <img
            src= "${product.image}"
            class="card-img-top"
            alt= "${product.name}"
          />
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.price}</p>
            <a href="#" class="btn btn-primary"
              ><i class="bi bi-cart-plus-fill"></i
            ></a>
          </div>
        </div>`;

      document.getElementById("shelf").innerHTML += productDiv;
    }
  }
}

window.onload = function () {
  visualizeProducts();
};

/*<div class="card product-card">
  <img
    src="https://m.media-amazon.com/images/I/61KcDlZIP3L._CR0,412,1060,1060_UX256.jpg"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">TLOU Part II</h5>
    <p class="card-text">79.99$</p>
    <a href="#" class="btn btn-primary">
      <i class="bi bi-cart-plus-fill"></i>
    </a>
  </div>
</div>;
*/
