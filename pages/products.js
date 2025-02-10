import * as data from "../data.js";

// for aside menu
document.getElementById("menu-toggle").addEventListener("click", function () {
  const asideContainer = document.getElementById("aside-container");
  asideContainer.classList.remove("aside-hidden");
  asideContainer.classList.add("aside-visible");
});

document.getElementById("close-menu").addEventListener("click", function () {
  const asideContainer = document.getElementById("aside-container");
  asideContainer.classList.remove("aside-visible");
  asideContainer.classList.add("aside-hidden");
});

let currentCategory = "All";

const classes = [
  "all",
  "minecraft",
  "fortnite",
  "valorant",
  "lol",
  "roblox",
  "pubg",
  "others",
];

const classToTitle = {
  all: "All",
  minecraft: "Minecraft",
  fortnite: "Fortnite",
  valorant: "Valorant",
  lol: "League of Legends",
  roblox: "Roblox",
  pubg: "PUBG",
  others: "Others",
};

function renderCards(cards) {
  const container = document.getElementById("cardContainer");
  container.innerHTML = "";

  cards.forEach((card) => {
    const cardElement = document.createElement("button");
    cardElement.className =
      "bg-[#212121] h-[375px] w-[98%] rounded-2xl flex flex-col font-roboto justify-between items-between p-2 text-start border-[#212121] border-2 hover:border-[#FFA500] hover:transform hover:scale-[101%] transition-transform duration-300";
    cardElement.innerHTML = `
            <div class="flex flex-col gap-2">
              <img src="${card.img}" class="w-full h-[150px] object-cover rounded-2xl" />
              <h1 class="font-bold text-lg md:text-xl">${card.title}</h1>
              <div class="font-bold text-xl flex items-center">
                <h1>$${card.price}</h1>
                <div class="text-[12px] ml-2 text-[#ffa500]">${card.sold} Sold</div>
              </div>
              <p class="text-gray-500 truncate-text-4 text-sm">${card.subtitle}</p>
            </div>
            <div class="flex">
              <div class="flex items-center text-[12px] py-[1px] px-[2px] gap-1 border-[1.5px] border-[#ffa500] w-fit bg-yellow-800">
                <i class="fa-solid fa-star text-[#FFA500] vertical-center"></i>
                <h1 class="text-white"> ${card.rate}</h1>
              </div>
              <div class="text-[12px] text-[#22cc5e] bg-[#22cc5e26] w-fit py-[2.5px] px-[3.5px] ml-4">${card.stock} In Stock</div>
            </div>

        `;
    container.appendChild(cardElement);
    cardElement.onclick = function () {
      window.location.href = `product.html?id=${card.id}`;
    }
  });
}

/// triggered when a category from aside is clicked
classes.forEach((className) => {
  const elements = document.querySelectorAll(`.${className}`);
  elements.forEach((element) => {
    element.classList.add("clickable-item");
    element.onclick = function () {
      // Reset all elements
      classes.forEach((resetClass) => {
        document.querySelectorAll(`.${resetClass}`).forEach((resetElement) => {
          resetElement.style.backgroundColor = "";
        });
      });

      const browseTitleElements = document.getElementsByClassName("browseTitle");
      for (let i = 0; i < browseTitleElements.length; i++) {

        classToTitle[className]
        browseTitleElements[i].innerText = "Browse " + classToTitle[className];
      }

      // Set the clicked element
      elements.forEach((el) => {
        el.style.backgroundColor = "#1f2937";
      });
      document.getElementById("sort-name").innerText = "Rate";
      currentCategory = classToTitle[className];

      className === classes[0] && renderCards(data.all.sort((a, b) => b.rate - a.rate))
      className === classes[1] && renderCards(data.minecraft.sort((a, b) => b.rate - a.rate))
      className === classes[2] && renderCards(data.fortnite.sort((a, b) => b.rate - a.rate))
      className === classes[3] && renderCards(data.valorant.sort((a, b) => b.rate - a.rate))
      className === classes[4] && renderCards(data.league.sort((a, b) => b.rate - a.rate))
      className === classes[5] && renderCards(data.roblox.sort((a, b) => b.rate - a.rate))
      className === classes[6] && renderCards(data.pubg.sort((a, b) => b.rate - a.rate))
      className === classes[7] && renderCards(data.others.sort((a, b) => b.rate - a.rate))
      
    };
  });
});

// default render of cards
renderCards(data.all.sort((a, b) => b.rate - a.rate))
// default backgroundColor of nav selections
document.querySelector(`.${classes[0]}`).style.backgroundColor = "#1f2937";


// for filter dropdown
document.addEventListener("DOMContentLoaded", function() {
  const filterButton = document.getElementById('filter');
  const filterDropdown = document.getElementById('filter-dropdown');

  filterButton.addEventListener('click', function() {
    filterDropdown.classList.toggle('hidden');
  });

  filterDropdown.addEventListener("mouseenter", function() {
    filterDropdown.classList.remove("hidden");
  });

  filterDropdown.addEventListener("mouseleave", function() {
    filterDropdown.classList.add("hidden");
  })
});

// for sort based on rate
document.getElementById('sort-rating').onclick = function(e) {
  document.getElementById("sort-name").innerText = "Rate";
  e.stopPropagation();
  if (currentCategory === "All") {
    renderCards(data.all.sort((a, b) => b.rate - a.rate));
  }else if (currentCategory === "Minecraft") {
    renderCards(data.minecraft.sort((a, b) => b.rate - a.rate));
  }else if (currentCategory === "Fortnite") {
    renderCards(data.fortnite.sort((a, b) => b.rate - a.rate));
  }else if (currentCategory === "Valorant") {
    renderCards(data.valorant.sort((a, b) => b.rate - a.rate));
  }else if (currentCategory === "League of Legends") {
    renderCards(data.league.sort((a, b) => b.rate - a.rate));
  }else if (currentCategory === "Roblox") {
    renderCards(data.roblox.sort((a, b) => b.rate - a.rate));
  }else if (currentCategory === "PUBG") {
    renderCards(data.pubg.sort((a, b) => b.rate - a.rate));
  }else if (currentCategory === "Others") {
    renderCards(data.others.sort((a, b) => b.rate - a.rate));
  }  
}

// for sort based on sold
document.getElementById('sort-sold').onclick = function(e) {
  e.stopPropagation();
  document.getElementById("sort-name").innerText = "Sold";
  if (currentCategory === "All") {
    renderCards(data.all.sort((a, b) => b.sold - a.sold));
  }else if (currentCategory === "Minecraft") {
    renderCards(data.minecraft.sort((a, b) => b.sold - a.sold));
  }else if (currentCategory === "Fortnite") {
    renderCards(data.fortnite.sort((a, b) => b.sold - a.sold));
  }else if (currentCategory === "Valorant") {
    renderCards(data.valorant.sort((a, b) => b.sold - a.sold));
  }else if (currentCategory === "League of Legends") {
    renderCards(data.league.sort((a, b) => b.sold - a.sold));
  }else if (currentCategory === "Roblox") {
    renderCards(data.roblox.sort((a, b) => b.sold - a.sold));
  }else if (currentCategory === "PUBG") {
    renderCards(data.pubg.sort((a, b) => b.sold - a.sold));
  }else if (currentCategory === "Others") {
    renderCards(data.others.sort((a, b) => b.sold - a.sold));
  }  
}

// for sort based on price
document.getElementById('sort-price').onclick = function(e) {
  e.stopPropagation();
  document.getElementById("sort-name").innerText = "Price";
  if (currentCategory === "All") {
    renderCards(data.all.sort((a, b) => b.price - a.price));
  }else if (currentCategory === "Minecraft") {
    renderCards(data.minecraft.sort((a, b) => b.price - a.price));
  }else if (currentCategory === "Fortnite") {
    renderCards(data.fortnite.sort((a, b) => b.price - a.price));
  }else if (currentCategory === "Valorant") {
    renderCards(data.valorant.sort((a, b) => b.price - a.price));
  }else if (currentCategory === "League of Legends") {
    renderCards(data.league.sort((a, b) => b.price - a.price));
  }else if (currentCategory === "Roblox") {
    renderCards(data.roblox.sort((a, b) => b.price - a.price));
  }else if (currentCategory === "PUBG") {
    renderCards(data.pubg.sort((a, b) => b.price - a.price));
  }else if (currentCategory === "Others") {
    renderCards(data.others.sort((a, b) => b.price - a.price));
  }  
}
