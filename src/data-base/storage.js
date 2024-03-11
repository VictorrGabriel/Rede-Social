let userInfo = [];

function addUserInfo() {
  let data = {
    name: $userName.value,
    lastName: $userLastName.value,
    email: $userEmail.value,
    number: $phoneNumber.value,
    password: $userPassword.value
  };
  userInfo.push(data);
}

function updateLocalStorage() {
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
}