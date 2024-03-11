const $email = document.getElementById('email');
const $password = document.getElementById('password');
const $login = document.getElementById('login-btn');
const userData = JSON.parse(localStorage.getItem('userInfo'));

function isAvaibleUserInfos() {
  if (
    $email.value !== userData[0].email ||
    $password.value !== userData[0].password
  ) {
    throw new Error('Email ou Senha é inválidos!');
  } else {
    return true;
  }

}

function goToProfile() {
  try {
    if (isAvaibleUserInfos()) {
      location.href = '../perfil/perfil.html';
    } 
  } catch (error) {
    console.error(error.message);
    notie.alert({ type: 'error', text: error.message });
  }
}

$login.addEventListener('click', goToProfile);
