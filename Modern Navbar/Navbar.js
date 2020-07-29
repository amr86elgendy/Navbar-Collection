const btn = document.querySelector(".icon");
const nav = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

btn.addEventListener("click", () => {
  nav.classList.toggle("nav-active");

  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = ``
    } else {
      link.style.animation = `linkFade 1s ease-in-out ${index / 4 + .2}s forwards`
      //console.log(index / 4 + .2)
    }
    // link.classList.toggle("fade");
  })

  btn.classList.toggle("toggle");
});

