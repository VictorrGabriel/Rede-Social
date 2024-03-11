const $userName = document.getElementById('register-user-name');
const $userLastName = document.getElementById('register-user-last-name');
const $userEmail = document.getElementById('register-user-email');
const $userPassword = document.getElementById('register-user-password');
const $confirmPassword = document.getElementById(
  'register-user-password-confirm'
);
const $phoneNumber = document.getElementById('register-user-phoneNumber');
const $submitButton = document.getElementById('submit-button');
const $nameConteiner = document.getElementById('name-conteiner');
const $keepGoogle = document.getElementById('google-account-button');
let date = new Date();
const year = date.getFullYear();
const userData = JSON.parse(localStorage.getItem('userInfo'));

function keepSigningUp() {
  try {
    if (validUserInfo()) {
      addUserInfo();
      updateLocalStorage();
      location.href = '../perfil/perfil.html';
    }
  } catch (error) {
    console.error(error.message);
    notie.alert({ type: 'error', text: error.message });
  }
}

function validUserInfo() {
  if ($userName.value.length < 3 || !isNaN($userName.value)) {
    throw new Error('Nome de usuário inválido!');
  } else if ($userLastName.value.length < 3 || !isNaN($userLastName.value)) {
    throw new Error('Ultimo nome de usuário inválido!');
  } else if ($userEmail.value.length === 0 || !isNaN($userEmail)) {
    throw new Error('Email de usuário inválido!');
  } else if (userData !== null) {
    if ($userEmail.value === userData[0].email) {
      throw new Error('Email já registrado!');
    }
  } else if ($phoneNumber.value < 0) {
    throw new Error('Número de Usuário é inválido!');
  } else if ($userPassword.value.length < 6 || !isNaN($userPassword.value)) {
    throw new Error('Senha de usuário inválido!');
  } else if ($confirmPassword.value !== $userPassword.value) {
    throw new Error('As senhas devem ser iguais!');
  } else {
    return true;
  }
}

let birthDateYear;

function getYearFrombirthDate() {
  let Bdate = $birthDate.value;
  let birthYear = Bdate.split('-')[0];
  birthDateYear = year - birthYear;
}

function tweakNameArea() {
  const ww = window.innerWidth;

  if (ww > 400) {
    $nameConteiner.classList.add('tweak');
  }
  if (ww < 400) {
    $nameConteiner.classList.remove('tweak');
  }
}

const $logedIn = document.getElementById('loged-in');

function alraedyLogedIn() {
  location.href = '../login/login.html';
}

$logedIn.addEventListener('click', alraedyLogedIn);

window.addEventListener('resize', tweakNameArea);

$submitButton.addEventListener('click', keepSigningUp);
