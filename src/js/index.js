function toggleNav() {
  const navMenu = document.querySelector('.nav-menu');
  if (navMenu.style.display === 'none' || navMenu.style.display === '') {
    navMenu.style.display = 'block'; // Exibe o menu
  } else {
    navMenu.style.display = 'none'; // Oculta o menu
  }
}