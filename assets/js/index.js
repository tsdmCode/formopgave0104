//elementgrabbers
const dialog = document.getElementById('myDialog');
const myName = document.getElementById('myName');
const number = document.getElementById('myNumber');
const email = document.getElementById('myEmail');
const password = document.getElementById('myPassword');
const submit = document.getElementById('mySubmit');
const main = document.getElementById('myMain');
//style
const valid = '2px solid green';
const invalid = '2px solid red';

//funktionerne
const validateName = () => {
  const str = myName.value;
  const test = /^[A-Za-z|æøå|ÆØÅ]{2,12}$/;
  if (str.length >= 2 && test.test(str)) {
    myName.style.border = valid;
  } else {
    myName.style.border = invalid;
  }
  return str.length >= 2 && test.test(str);
};

const validateNum = () => {
  const n = number.value;
  const numRegex = /^(\+45)?\d{8}$/;
  const validNumber = numRegex.test(n);
  if (validNumber) {
    number.style.border = valid;
  } else {
    number.style.border = invalid;
  }
  return validNumber;
};

const validateEmail = () => {
  const mail = email.value;
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const validEmail = regex.test(mail);
  if (validEmail) {
    email.style.border = valid;
  } else {
    email.style.border = invalid;
  }
  return validEmail;
};

const validatePassword = () => {
  const pass = 'tyttebær5';
  const pw = password.value;
  if (pass === pw) {
    password.style.border = valid;
  } else {
    password.style.border = invalid;
  }
  return pass === pw;
};
//eventlistenerne
myName.addEventListener('keyup', validateName);
number.addEventListener('keyup', validateNum);
email.addEventListener('keyup', validateEmail);
password.addEventListener('keyup', validatePassword);
submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (validateName() && validateNum() && validateEmail() && validatePassword()) {
    dialog.close();
    main.classList.remove('blurred');
  }
});
