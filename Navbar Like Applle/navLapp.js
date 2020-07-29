const searchIcon = document.querySelector("#search .fa");
const listMenu = document.querySelectorAll(".menu-item");
const formInput =document.querySelector(".search-form");
const overlay = document.querySelector(".overlay");


searchIcon.addEventListener("click", (e) => {
  e.preventDefault();
  listMenu.forEach(item => {
    item.classList.add("hide-item");
  });
  formInput.classList.add("active");
  overlay.classList.add("busy")
})

document.addEventListener("click", (e) => {
  if (e.target.dataset.click !== "input") {
    listMenu.forEach(item => {
      item.classList.remove("hide-item");
    });
    formInput.classList.remove("active");
    overlay.classList.remove("busy")
  }
})