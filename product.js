import * as data from "data.js";

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

const ids = []
renderCards(product?.variants);

function renderCards(cards) {
  const container = document.getElementById("variants-div");
  container.innerHTML = "";
  let id = 1
  cards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.id = id
    ids.push(id)
    id += 1
    cardElement.className =
      "h-auto rounded-lg flex flex-col font-roboto border-[1px] w-full p-4 border-gray-700 cursor-pointer";
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

document.getElementById(ids[0]).style.borderColor = "#FFA500"
ids.forEach((id) => {
  document.getElementById(id).onclick = function () {
    ids.forEach((resetId) => {
      document.getElementById(resetId).style.borderColor = "#616161";
    });
    document.getElementById(id).style.borderColor = "#FFA500";
  };
});

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

// script for cart functions
document.addEventListener('DOMContentLoaded', function() {
  const cartButton = document.getElementById('cartButton');
  const cartModal = document.getElementById('cartModal');
  const closeCart = document.getElementById('closeCart');
  const modalContent = cartModal.querySelector('.transform');

  cartButton.addEventListener('click', () => {
    cartModal.classList.remove('hidden');
    setTimeout(() => {
      modalContent.classList.remove('translate-x-full');
    }, 10);
  });

  function closeModal() {
    modalContent.classList.add('translate-x-full');
    setTimeout(() => {
      cartModal.classList.add('hidden');
    }, 0);
  }

  closeCart.addEventListener('click', closeModal);
  cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
      closeModal();
    }
  });

  document.getElementById('cartItems').addEventListener('click', function(e) {
    const removeButton = e.target.closest('.remove-item');
    if (removeButton) {
      const cartItem = removeButton.closest('.rounded-lg');
      const itemHeight = cartItem.offsetHeight;
      const nextItems = Array.from(cartItem.nextElementSibling ? cartItem.parentElement.children : [])
        .slice(Array.from(cartItem.parentElement.children).indexOf(cartItem) + 1);
      
      cartItem.style.opacity = '0';
      cartItem.style.transform = 'translateX(100px)';
      cartItem.style.transition = 'all 0.3s ease';
      
      nextItems.forEach(item => {
        item.classList.add('cart-item');
        requestAnimationFrame(() => {
          item.style.transform = `translateY(-${itemHeight + 16}px)`;
        });
      });
      
      setTimeout(() => {
        cartItem.remove();
        nextItems.forEach(item => {
          item.style.transition = 'none';
          item.style.transform = 'translateY(0)';
          item.offsetHeight;
          item.style.transition = 'transform 0.3s ease';
        });
        updateTotal();
      }, 300);
    }
  });

  function updateTotal() {
    const prices = Array.from(document.querySelectorAll('#cartItems .text-white'))
      .map(span => {
        const price = span.textContent.replace('$', '');
        return parseFloat(price) || 0;
      })
      .filter(price => !isNaN(price));
    
    const total = prices.reduce((sum, price) => sum + price, 0);
    const formattedTotal = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(total);
    
    document.getElementById('cartTotal').textContent = formattedTotal;
  }

  updateTotal();
});


