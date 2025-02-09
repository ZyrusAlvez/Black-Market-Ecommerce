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

const ids = [
  "all",
  "minecraft",
  "fortnite",
  "valorant",
  "lol",
  "roblox",
  "pubg",
  "others",
];
document.getElementById(ids[0]).style.backgroundColor = "#212121";
ids.forEach((id) => {
  document.getElementById(id).classList.add("clickable-item");
  document.getElementById(id).onclick = function () {
    ids.forEach((resetId) => {
      document.getElementById(resetId).style.backgroundColor = "";
    });
    document.getElementById(id).style.backgroundColor = "#212121";
  };
});

const ids_sm = [
  "all-sm",
  "minecraft-sm",
  "fortnite-sm",
  "valorant-sm",
  "lol-sm",
  "roblox-sm",
  "pubg-sm",
  "others-sm",
];
document.getElementById(ids_sm[0]).style.backgroundColor = "#1f2937";
ids_sm.forEach((id_sm) => {
  document.getElementById(id_sm).classList.add("clickable-item");
  document.getElementById(id_sm).onclick = function () {
    ids_sm.forEach((resetId) => {
      document.getElementById(resetId).style.backgroundColor = "";
    });
    document.getElementById(id_sm).style.backgroundColor = "#1f2937";
  };
});

function renderCards(cards) {
  const container = document.getElementById("cardContainer");
  container.innerHTML = "";

  cards.forEach((card) => {
    const cardElement = document.createElement("button");
    cardElement.className =
      "bg-[#212121] h-[370px] w-[98%] rounded-2xl flex flex-col font-roboto justify-between items-between p-2 text-start border-[#212121] border-2 hover:border-[#FFA500] hover:transform hover:scale-[101%] transition-transform duration-300";
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

renderCards(data.all);
