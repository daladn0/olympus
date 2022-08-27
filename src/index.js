import "normalize.css";
import "./styles/main.scss";

window.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector("#burger");
  const sidebar = document.querySelector("#sidebar");
  const accordions = document.querySelectorAll(".questions__item");

  burger.addEventListener("click", (e) => {
    burger.classList.toggle("active");
    sidebar.classList.toggle("active");
  });

  document.body.addEventListener("click", (e) => {
    if (!sidebar) return;

    if (
      e.target === sidebar ||
      e.target.closest("#sidebar") ||
      e.target === burger ||
      e.target.closest("#burger")
    )
      return;

    burger.classList.remove("active");
    sidebar.classList.remove("active");
  });

  accordions.forEach((accordion) => {
    accordion.addEventListener('click', e => {
      accordion.classList.add('active')
    })
  });
});
