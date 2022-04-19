(function () {
  const openButton = document.querySelector(".nav__menu");
  const menu = document.querySelector(".menu--list");
  const closeMenu = document.querySelector(".nav__close");

  openButton.addEventListener("click", () => {
    menu.classList.add("menu--list--show");
  });

  closeMenu.addEventListener("click", () => {
    menu.classList.remove("menu--list--show");
  });
})();
