import * as data from "../data.js";

// Function to get URL parameters
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Get the product ID from the URL
const productId = getUrlParameter('id');

// Find the product details in data.all
const product = data.all.find(item => item.id === productId);

// Update the HTML content with the product details
if (product) {
  document.getElementById('product-title').innerText = product?.title;
  document.getElementById('page-title').innerText = product?.title;
  document.getElementById('product-subtitle').innerText = product?.subtitle;
  document.getElementById('product-image').src = product?.gallery[0];
  document.getElementById('product-price').innerText = product?.price;
  document.getElementById('product-sold').innerText = product?.sold;
  document.getElementById('product-rate').innerText = product?.rate;
} else {
  document.getElementById('product-details').innerText = "Product not found.";
}

renderCards(product?.variants);

function renderCards(cards) {
  const container = document.getElementById("variants-div");
  container.innerHTML = "";

  cards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.className =
      "h-auto rounded-lg flex flex-col font-roboto border-[1px] w-full p-4";
    cardElement.innerHTML = `
        <h1>${card.title}</h1>
        <p>${card.subtitle}</p>
        <div class="flex justify-between">
          <h2 class="text-[#22cc5e]">stock: ${card.stock}</h2>
          <h2 class="text-[#ffa500]">$${card.price}</h2>
        </div>
        `;

    container.appendChild(cardElement);
  });
}

console.log(product)
renderDescription(product.description);

function renderDescription(obj) {
  const container = document.getElementById("description-div");
  container.innerHTML = "";

  let newInnerHTML = ""
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
    newInnerHTML += `
    <h1 class="text-xl font-medium">${key}</h1>
    <ul class="pl-5 list-disc text-[14px] text-[#a3a3a3]">
      <li>${obj[key]}</li>
    </ul>
    `;
  }
  container.innerHTML = newInnerHTML;

}

