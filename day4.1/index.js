const uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "~!@#$%^&*()<>?{}|=-";
const showPassword = document.querySelector(".display-password");
const passwordLengthInput = document.querySelector("#length");
const uppercase = document.querySelector("#uppercase");
const lowercase = document.querySelector("#lowercase");
const numbers = document.querySelector("#numbers");
const symbols = document.querySelector("#symbols");

const generateRandomDate = (dataset) => {
  return dataset[Math.floor(Math.random() * dataset.length)];
};

const trimString = (str, num) => {
  if (str.length > num) {
    let substr = str.substr(0, num);
    return substr;
  }
  return str;
};
const generatePassword = (password = "") => {
  if (uppercase.checked) password += generateRandomDate(uppercaseSet);
  if (lowercase.checked) password += generateRandomDate(lowercaseSet);
  if (numbers.checked) password += generateRandomDate(numberSet);
  if (symbols.checked) password += generateRandomDate(symbolSet);
  if (password.length < passwordLengthInput.value)
    return generatePassword(password);
  if (password.length > passwordLengthInput.value)
    password = trimString(password, passwordLengthInput.value);
  showPassword.innerText = password;
};

const password = () => generatePassword();
