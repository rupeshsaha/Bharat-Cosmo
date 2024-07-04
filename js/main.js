document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-logo");
  const menu = document.querySelector(".mobile-menu");
  const exitButton = document.querySelector(".exit-logo");
  const exploreNow = document.querySelector(".explore");
  const exploreMobile = document.querySelector(".mobile-explore");
  // const exploreMissions = document.querySelector(".missions");

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
  });

  exitButton.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
  });

  exploreNow.addEventListener("click", () => {
    window.location.href = "pages/explore.html";
  });
  exploreMobile.addEventListener("click", () => {
    window.location.href = "pages/explore.html";
  });
});
