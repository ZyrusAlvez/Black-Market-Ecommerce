import * as data from "../data.js";

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
      "bg-[#212121] h-[370px] w-[98%] rounded-2xl flex flex-col font-roboto justify-between items-between p-2 text-start border-[#212121] border-2 md:hover:border-[#FFA500] md:hover:transform md:hover:scale-[101%] transition-transform duration-300";
    cardElement.innerHTML = `
            <div class="flex flex-col gap-2">
              <img src="${card.img}" class="w-full h-[150px] object-cover rounded-2xl" />
              <h1 class="font-bold text-lg md:text-xl">${card.title}</h1>
              <div class="font-bold text-xl flex items-center">
                <h1>$${card.price}</h1>
                <div class="text-[12px] ml-2 text-[#ffa500]">${card.sold} Sold</div>
              </div>
              <p class="text-gray-500 truncate-text-4 text-sm">${card.description}</p>
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
  });
}

document.querySelector(`.${classes[0]}`).style.backgroundColor = "#1f2937";
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
        browseTitleElements[i].innerText = "Browse " + classToTitle[className];
      }

      // Set the clicked element
      elements.forEach((el) => {
        el.style.backgroundColor = "#1f2937";
      });

      className === classes[0] && renderCards(data.all);
      className === classes[1] && renderCards(data.minecraft);
      className === classes[2] && renderCards(data.fortnite);
      className === classes[3] && renderCards(data.valorant);
      className === classes[4] && renderCards(data.league);
      className === classes[5] && renderCards(data.roblox);
      className === classes[6] && renderCards(data.pubg);
      className === classes[7] && renderCards(data.others)
      
    };
  });
});

renderCards(data.all);


