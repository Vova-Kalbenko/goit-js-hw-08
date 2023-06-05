import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const messageValue = 'feedback-form-state';

let formData = {};

const saveMessage = e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('messageValue', JSON.stringify(formData));
  console.log(e.target.name)
  console.log(e.target.value)
};

  if(localStorage.getItem('messageValue')){
  formData = JSON.parse(localStorage.getItem('messageValue'))
  for(let key in formData){
    formEl.elements[key].value = formData[key]
  }
}

formEl.addEventListener('submit', throttle(saveMessage, 500));

