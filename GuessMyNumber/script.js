const check = document.querySelector(".check");
const number = document.querySelector(".number");
const message = document.querySelector(".message");
const scoreElement = document.querySelector(".score");
const highscoreElement = document.querySelector(".highscore");
const again = document.querySelector(".again");
const body = document.querySelector("body");

const randomNumber = () => Math.floor(Math.random() * 20) + 1;
let randomValue = randomNumber();
let score = 20;
let highscore = 0;

check.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    message.textContent = "enter some value";
    return;
  }
  if (guess === randomValue) {
    message.textContent = "Congrats";
    highscore = Math.max(score, highscore);
    highscoreElement.textContent = highscore;
    number.innerText = randomValue;
    body.style.backgroundColor = "green";
    return;
  }
  if (guess < randomValue) message.innerText = "Too Low";
  if (guess > randomValue) message.innerText = "Too High";
  score -= 1;
  scoreElement.textContent = score;
  if (score === 0) {
    body.style.backgroundColor = "red";
    message.textContent = "Game Over";
    return;
  }
});

again.addEventListener("click", reset);

function reset() {
  body.style.backgroundColor = "#222";
  score = 20;
  scoreElement.textContent = score;
  message.textContent = "Start guessing...";
  randomValue = randomNumber();
  number.innerText = "?";
  guess.value = "";
}
