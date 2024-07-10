document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("#menu-logo");
  const menu = document.querySelector(".mobile-menu");
  const exitButton = document.querySelector(".exit-logo");


  menuButton.addEventListener("click", () => {
    menu.classList.toggle("show");
  });

  exitButton.addEventListener("click", () => {
    menu.classList.toggle("show");
  });


});
