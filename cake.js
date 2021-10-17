let layout = document.getElementById("layoutRowId");

const cakeList = [
  { id: 1, title: "Chocolate Cake", imgUrl: "cake1.png", price: 235 },
  { id: 2, title: "Strawberry Cake", imgUrl: "cake2.png", price: 520 },
  { id: 3, title: "Purple Cake", imgUrl: "cake3.jpg", price: 522 },
  { id: 4, title: "School Cake", imgUrl: "cake4.jpg", price: 550 },
  { id: 5, title: "Choco Donut", imgUrl: "donuts1.jpg", price: 150 },
  { id: 6, title: "Strawberry Donut", imgUrl: "donut2.jpg", price: 100 },
  { id: 7, title: "Mango Cupcake", imgUrl: "cupcake1.jpg", price: 50 },
  { id: 8, title: "Choco Cupcake", imgUrl: "cupcake2.jpg", price: 150 },
  { id: 9, title: "strawberry cake", imgUrl: "strawberry.jpg", price: 150 },
];

for (let i = 0; i < cakeList.length; i++) {
  const markup = `<div class="col-12 col-sm-6 col-lg-4 mb-5">
  <div class="card">
    <div class="img-container">
      <img src=${cakeList[i].imgUrl} class="card-img-top" alt="" />
    </div>
    <div class="card-body">
      <div class="d-flex justify-content-between text-capitalize">
        <h5 id="store-item-name">${cakeList[i].title}</h5>
      </div>
      <div class="d-flex justify-content-between">
        <h5>Rs <strong class="font-weight-bold">${cakeList[i].price}</strong></h5>
        <button id="add" class="btn btn-primary" 
          onclick="addCart(event, '${cakeList[i]}.id')"
          
        >
          <i onclick="" class="bi bi-bag-plus"></i>
        </button>
      </div>
    </div>
  </div>
  </div>`;

  layout.innerHTML += markup;
}

let cart = [];
let cartSpan = document.getElementById("cart");
cartSpan.innerHTML = `<span class="cartCount">${0}</span>`;

function addCart(event, id) {
  console.log("e", event, id);
  const selectedCake = cakeList.filter((cake) => cake.id === id);
  console.log("selectedCake", selectedCake);
  cart.push(selectedCake);
  console.log(cart);
  cartSpan.innerHTML = `<span class="cartCount">${cart.length || 0}</span>`;
}

