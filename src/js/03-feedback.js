import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const messageValue = 'feedback-form-state';

let formData = {};

const saveMessage = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('messageValue', JSON.stringify(formData));
};

  if(localStorage.getItem('messageValue')){
  formData = JSON.parse(localStorage.getItem('messageValue'))
  for(let key in formData){
    formEl.elements[key].value = formData[key]
  }
}

formEl.addEventListener('input', throttle(saveMessage, 500));

