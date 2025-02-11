import * as data from "./data.js";

const ids = [
  "minecraft",
  "fortnite",
  "valorant",
  "lol",
  "roblox",
  "pubg",
  "others",
];


document.getElementById(ids[0]).style.backgroundColor = "#FFA500";
ids.forEach((id) => {
  document.getElementById(id).classList.add("clickable-item");
  document.getElementById(id).onclick = function () {
    ids.forEach((resetId) => {
      document.getElementById(resetId).style.backgroundColor = "";
    });
    document.getElementById(id).style.backgroundColor = "#FFA500";
    
    id === ids[0] && renderCards(data.minecraft);
    id === ids[1] && renderCards(data.fortnite);
    id === ids[2] && renderCards(data.valorant);
    id === ids[3] && renderCards(data.league);
    id === ids[4] && renderCards(data.roblox);
    id === ids[5] && renderCards(data.pubg);
    id === ids[6] && renderCards(data.others);
  };
});

let id = 1
renderCards(data.minecraft);
function renderCards(cards) {
  const container = document.getElementById("cardContainer");
  container.innerHTML = ""; // Clear previous content

  cards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.id = id
    cardElement.className =
      "h-auto w-full border-gray-700 border-[1px] rounded-2xl flex flex-col font-roboto justify-center p-2 md:flex-row md:items-center md:gap-4 md:justify-between";
    cardElement.innerHTML = `
          <img src="${card.img}" class="w-full h-[150px] object-cover rounded-2xl md:w-[250px] md:h-full" />
          <div class="flex flex-col gap-2 mt-2 w-full h-full md:flex-row">
            <div class="flex flex-col gap-2 justify-evenly">
              <h1 class="font-bold text-xl md:text-2xl">${card.title}</h1>
              <p class="text-gray-500 truncate-text-3">${card.subtitle}</p>
              <div class="text-[12px] text-[#22cc5e] bg-[#22cc5e26] w-fit rounded-lg py-[4px] px-[8px]">${card.stock} In Stock</div>
            </div>  
            <div class="flex justify-between items-center md:flex-col ">
              <div class="font-bold text-xl ml-2">$${card.price}</div>
              <button class="bg-[#FFA500] text-white rounded-lg py-1 px-2 mb-2 font-bold hover:bg-[#FFB733]">Purchase</button>
            </div>
          </div>
      `;
    container.appendChild(cardElement);
    document.getElementById(id).onclick = function () {
      window.location.href = `product.html?id=${card.id}`;
    }
    id += 1
  });
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


// particles.js configuration
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#FFA500" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#FFA500" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 30, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#FFA500",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 0.1,
      },
      repulse: { distance: 100, duration: 0.8 },
      push: { particles_nb: 2 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');
signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});
