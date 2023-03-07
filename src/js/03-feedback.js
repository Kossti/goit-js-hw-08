import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onCurrentInputData, 500));
form.addEventListener('submit', handleSubmit);

let inputData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};
const { email, message } = form.elements;
loadPage();

function onCurrentInputData(event) {
  inputData = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(inputData));
}

function loadPage() {
  if (inputData) {
    email.value = inputData.email || '';
    message.value = inputData.message || '';
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.currentTarget;

  const inputData = { email: email.value, message: message.value };
  console.log(inputData);

  localStorage.removeItem(LOCALSTORAGE_KEY);
  event.currentTarget.reset();
}
