const menuMobi = document.querySelector(".menu-mobi");
const menu = document.getElementById("menu");
console.log(menu);

menuMobi.addEventListener("click", () => {
  menu.classList.toggle("active");
});
