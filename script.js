window.onload = function() {
  const navButton = document.getElementById('nav-button');
  const main = document.getElementById('main');
  const drawer = document.getElementById('drawer');
  const drawerItems = document.getElementsByClassName('nav__item');

  function openDrawer(e) {
    drawer.classList.add('open');
  }

  function closeDrawer(e) {
    drawer.classList.remove('open');
  };

  navButton.addEventListener('click', openDrawer);
  main.addEventListener('click', closeDrawer);

  for (let i = 0; i < drawerItems.length; i++) {
    drawerItems[i].addEventListener('click', closeDrawer, false);
  }
}
