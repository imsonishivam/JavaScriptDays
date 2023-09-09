const container = document.querySelector(".container");

window.addEventListener("mousemove", (event) => {
  const temp = gsap.utils.mapRange(
    0,
    window.innerWidth,
    150 + container.getBoundingClientRect().width / 2,
    window.innerWidth - (150 + container.getBoundingClientRect().width / 2),
    event.clientX
  );
  container.style.left = `${temp}px`;
});
