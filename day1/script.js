var rect = document.querySelector(".container");

rect.addEventListener("mousemove", (event) => {
  const xPos = event.clientX;
  //   const yPos = event.clientY;
  //   console.log(rect.getBoundingClientRect());
  const rectDetails = rect.getBoundingClientRect();

  const valueInSideRect = xPos - rectDetails.left;
  if (valueInSideRect < rectDetails.width / 2) {
    const temp = gsap.utils.mapRange(
      0,
      rectDetails.width / 2,
      255,
      0,
      valueInSideRect
    );
    // const intencityOfRed = rectDetails.width / 2 - valueInSideRect;
    // console.log(valueInSideRect, intencityOfRed);
    rect.style.backgroundColor = `rgb(${temp},0,0)`;
  } else if (valueInSideRect > rectDetails.width / 2) {
    const temp = gsap.utils.mapRange(
      rectDetails.width / 2,
      rectDetails.width,
      0,
      255,
      valueInSideRect
    );
    // const intencityOfBlue = rectDetails.width - valueInSideRect;
    rect.style.backgroundColor = `rgb(0,0,${temp})`;
  } else console.log("center");

  //   const left = 431.703125;
  //   const right = 1007.296875;
  //   const center = (right + left) / 2;
  //   if (xPos > center) {
  //     console.log("right");
  //   } else if (xPos < 718.5) console.log("left");
  //   else console.log("its center");
});

rect.addEventListener("mouseleave", () => {
  rect.style.backgroundColor = "#fff";
});

// bottom: 280.796875
// height: 93.59375
// left: 431.703125
// right: 1007.296875
// top: 187.203125
// width: 575.59375
// x: 431.703125
// y: 187.203125
