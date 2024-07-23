import 'modern-normalize/modern-normalize.css';

const formData = {
  email: '',
  message: '',
};

const LS_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

storageCheck(LS_KEY);
form.addEventListener('input', formInputHandler);
form.addEventListener('submit', formSubmitHandler);

function storageCheck(key) {
  let storage = JSON.parse(localStorage.getItem(key));
  const { email: emailData, message: msgData } = form.elements;
  if (storage) {
    emailData.value = storage.email;
    formData.email = storage.email;
    msgData.value = storage.message;
    formData.message = storage.message;
  }
}

function formInputHandler(evt) {
  const { email, message } = evt.currentTarget.elements;
  formData.email = email.value.trim();
  formData.message = message.value.trim();
  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  const { email, message } = formData;
  if (email === '' || message === '') {
    alert('Fill please all fields🙏');
    return;
  }
  console.log(formData);
  localStorage.removeItem(LS_KEY);

  const { email: input, message: textarea } = evt.currentTarget.elements;
  input.value = '';
  textarea.value = '';
}
