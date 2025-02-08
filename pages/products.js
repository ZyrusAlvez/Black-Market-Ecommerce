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