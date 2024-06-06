window.isPositive = true;
window.index = -1;

function toggleDiv3() {
  const div3 = document.querySelector(".toast");
  div3.classList.toggle("show");
  div3.style.transition = "bottom 0.5s ease-in-out";
}