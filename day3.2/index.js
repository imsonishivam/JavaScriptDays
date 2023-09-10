const container = document.querySelector(".container");
const displayColor = document.querySelector(".display");
const copyColor = document.querySelector("#copy");
const generateColor = document.querySelector("#generate");

copyColor.addEventListener("click", async (e) => {
  const text = displayColor.textContent;
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    alert(error);
  }
});

generateColor.addEventListener("click", () => {
  let colorCode = Math.floor(Math.random() * 16777215).toString(16);
  displayColor.textContent = `#${colorCode}`;
  container.style.backgroundColor = `#${colorCode}`;
  console.log(colorCode);
  //   let randomNumber = Math.floor(Math.random() * 900001) + 100000;
  // displayColor.textContent = `#${randomNumber}`;
  //   container.style.backgroundColor = `#${randomNumber}`;
});
