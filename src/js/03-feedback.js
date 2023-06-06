import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const messageValue = 'feedback-form-state';
const buttonEL = document.querySelector('[type="submit"]');
let formData = {};
const { email, message } = formEl.elements;
const saveMessage = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('messageValue', JSON.stringify(formData));
};

if (localStorage.getItem('messageValue')) {
  formData = JSON.parse(localStorage.getItem('messageValue'));
  for (let key in formData) {
    formEl.elements[key].value = formData[key];
  }
}

const handleSubmitForm = e => {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });
  email.value === '' || message.value === ''

  localStorage.removeItem('messageValue');
  e.currentTarget.reset();

};

formEl.addEventListener('input', throttle(saveMessage, 500));
formEl.addEventListener('submit', handleSubmitForm);


