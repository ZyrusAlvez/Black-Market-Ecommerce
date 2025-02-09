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

renderCards(data.minecraft);
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
  };
});

function renderCards(cards) {
  const container = document.getElementById("cardContainer");
  container.innerHTML = ""; // Clear previous content

  cards.forEach((card) => {
    const cardElement = document.createElement("div");
    cardElement.className =
      "h-auto w-full border-gray-700 border-[1px] rounded-2xl flex flex-col font-roboto justify-center p-2 md:flex-row md:items-center md:gap-4 md:justify-between";
    cardElement.innerHTML = `
          <img src="${card.img}" class="w-full h-[150px] object-cover rounded-2xl md:w-[250px] md:h-full bg-yellow-800" />
          <div class="flex flex-col gap-2 mt-2 w-full h-full md:flex-row">
            <div class="flex flex-col gap-2 justify-evenly">
              <h1 class="font-bold text-xl md:text-2xl">${card.title}</h1>
              <p class="text-gray-500 truncate-text-3">${card.description}</p>
              <div class="text-[12px] text-[#22cc5e] bg-[#22cc5e26] w-fit rounded-lg py-[4px] px-[8px]">${card.stock} In Stock</div>
            </div>  
            <div class="flex justify-between items-center md:flex-col ">
              <div class="font-bold text-xl ml-2">$${card.price}</div>
              <button class="bg-[#FFA500] text-white rounded-lg py-1 px-2 mb-2 font-bold hover:bg-[#FFB733]">Purchase</button>
            </div>
          </div>
      `;
    container.appendChild(cardElement);
  });
}




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
