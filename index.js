const sideBar = document.getElementById("side-Bar");
const xButton = document.querySelector(".fa-xmark");
const barButton = document.querySelector(".fa-bars");

function hideMenu() {
  sideBar.style.display = "none";
}

function showMenu() {
  const sideBar = document.getElementById("side-Bar");
  sideBar.style.display = "block";
}

xButton.addEventListener("click", hideMenu);
barButton.addEventListener("click", showMenu);
