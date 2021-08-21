//button variable initialization start
const memory1 = document.getElementById("memory-1");
const memory2 = document.getElementById("memory-2");

const storage1 = document.getElementById("storage-1");
const storage2 = document.getElementById("storage-2");
const storage3 = document.getElementById("storage-3");

const delivery1 = document.getElementById("delivery-1");
const delivery2 = document.getElementById("delivery-2");

const promoButton = document.getElementById("apply-promo");
//button variable initialization end

// location initialization
let memoryCost = document.getElementById("memory-cost");
let storageCost = document.getElementById("storage-cost");
let deliveryCost = document.getElementById("delivery-cost");
let totalPrice = document.getElementById("total-price");
let discountTotal = document.getElementById("discount-total");
let userInput = document.getElementById("promo-code");
// location initialization end

// total price calculation start
function priceCalculation() {
  let sum =
    1299 +
    parseInt(memoryCost.innerText) +
    parseInt(storageCost.innerText) +
    parseInt(deliveryCost.innerText);
  totalPrice.innerText = sum;
  discountTotal.innerText = sum;
}
// total price calculation end

// price update start
function priceUpdate(change, location) {
  location.innerText = change;
  priceCalculation();
}
// price update end

//discount calculation start
function discount() {
  let price = parseInt(totalPrice.innerText);
  let discountPrice = price - price / 5;
  discountTotal.innerText = discountPrice;
}
//discount calculation end

// defining event listener functions start
// price update starts
memory1.addEventListener("click", function () {
  priceUpdate(0, memoryCost);
});

memory2.addEventListener("click", function () {
  priceUpdate(180, memoryCost);
});

storage1.addEventListener("click", function () {
  priceUpdate(0, storageCost);
});

storage2.addEventListener("click", function () {
  priceUpdate(100, storageCost);
});

storage3.addEventListener("click", function () {
  priceUpdate(180, storageCost);
});

delivery1.addEventListener("click", function () {
  priceUpdate(0, deliveryCost);
});
delivery2.addEventListener("click", function () {
  priceUpdate(20, deliveryCost);
});
// price update end

//discount starts
userInput.addEventListener("keyup", function (event) {
  if (event.target.value == "stevekaku") {
    promoButton.removeAttribute("disabled");
  } else {
    promoButton.setAttribute("disabled", true);
  }
});

promoButton.addEventListener("click", function () {
  discount();
  promoButton.setAttribute("disabled", true);
});
//discount end
// defining event listener functions start
