function toggleMenu() {
  var dropdownMenu = document.querySelector(".dropdown-menu");
  dropdownMenu.classList.toggle("open");
}

var burgerMenu = document.querySelector(".burger-menu");
burgerMenu.addEventListener("click", toggleMenu);
