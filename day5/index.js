const totalAmount = document.querySelector(".t-amount");
const expenseAmount = document.querySelector(".e-amount");
const incomeAmount = document.querySelector(".i-amount");
const container = document.querySelector(".container");
const show = document.querySelector(".show");
const itemNameElement = document.querySelector("#item-name");
const itemPriceElement = document.querySelector("#item-price");
let total = 10000;
let expense = 0;
let income = 0;
totalAmount.innerText = total;
expenseAmount.innerText = expense;
incomeAmount.innerText = income;

const update = (itemPrice, typeOfWay) => {
  if (typeOfWay == "expense") {
    total -= itemPrice;
    expense += itemPrice;
  } else {
    total += itemPrice;
    income += itemPrice;
  }
  reset();
};

const reset = () => {
  totalAmount.innerText = total;
  expenseAmount.innerText = expense;
  incomeAmount.innerText = income;
};

const addItem = () => {
  const itemName = document.querySelector("#item-name").value;
  const itemPrice = document.querySelector("#item-price").value;
  const typeOfWay = document.querySelector("#ways").value;
  if (itemName === "" || isNaN(Number(itemPrice)))
    return alert("Please fill all fields!");
  const list = document.createElement("div");
  list.classList.add("list");
  list.innerHTML = ` <span>${itemName}</span>
    <span>${itemPrice}</span>
    <span class="way">${typeOfWay}</span>
    <button class="delete">Delete</button>`;
  show.append(list);
  itemNameElement.value = "";
  itemPriceElement.value = "";
  update(Number(itemPrice), typeOfWay);

  list.querySelector(".delete").addEventListener("click", () => {
    const way = list.querySelector(".way").innerText;
    if (way == "expense") {
      update(-Number(itemPrice), "expense");
    } else {
      update(-Number(itemPrice), "income");
    }
    show.removeChild(list);
  });
};
