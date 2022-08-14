// eslint-disable-next-line linebreak-style
const form = document.getElementById('.userForm');
const username = document.getElementById('fullname');
const email = document.getElementById('email');
const MusicCom = document.getElementById('musicInfo');
const checkbox = document.getElementById('agreement-clause');

const prodError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.errMsg');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const prodSucc = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.errMsg');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = (mail) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(mail).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const musicValue = MusicCom.value.trim();

  if (usernameValue === '') {
    prodError(username, 'Username is required');
  } else {
    prodSucc(username);
  }

  if (emailValue === '') {
    prodError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    prodError(email, 'Provide a valid email address');
  } else {
    prodSucc(email);
  }

  const required = 45;
  const left = required - musicValue.length;
  if (left === 45) {
    prodError(MusicCom, 'Comments is required');
  } else if (left > 0) {
    prodError(MusicCom, `${left} more characters required`);
  } else {
    prodSucc(MusicCom);
  }

  if (!checkbox.checked) {
    prodError(checkbox, 'Please accept the terms before submission');
  } else {
    prodSucc(checkbox);
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  validateInputs();
});
