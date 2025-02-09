document.getElementById('menu-toggle').addEventListener('click', function() {
  const asideContainer = document.getElementById('aside-container');
  asideContainer.classList.remove('aside-hidden');
  asideContainer.classList.add('aside-visible');

});

document.getElementById('close-menu').addEventListener('click', function() {
  const asideContainer = document.getElementById('aside-container');
  asideContainer.classList.remove('aside-visible');
  asideContainer.classList.add('aside-hidden');
});

const ids = ["all", "minecraft", "fortnite", "valorant", "lol", "roblox", "pubg", "others"];
document.getElementById(ids[0]).style.backgroundColor = "#212121";
ids.forEach(id => {
    document.getElementById(id).classList.add('clickable-item');
    document.getElementById(id).onclick = function() {
        ids.forEach(resetId => {
            document.getElementById(resetId).style.backgroundColor = "";
        });
        document.getElementById(id).style.backgroundColor = "#212121";
    }
});

const ids_sm = ["all-sm", "minecraft-sm", "fortnite-sm", "valorant-sm", "lol-sm", "roblox-sm", "pubg-sm", "others-sm"];
document.getElementById(ids_sm[0]).style.backgroundColor = "#1f2937";
ids_sm.forEach(id_sm => {
    document.getElementById(id_sm).classList.add('clickable-item');
    document.getElementById(id_sm).onclick = function() {
        ids_sm.forEach(resetId => {
            document.getElementById(resetId).style.backgroundColor = "";
        });
        document.getElementById(id_sm).style.backgroundColor = "#1f2937";
    }
});
