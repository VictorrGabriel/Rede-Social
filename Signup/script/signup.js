document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  console.log("o8@vicPas")

  /* Encio de formulário */

  form.addEventListener("submit", function (e) {
    let data = new FormData(form);
    resetErrorMessage();
    e.preventDefault();
    if (!validPasswords() || !validBirthDate() || !validNameField()) {
      e.preventDefault(); // previnir envio do formulário
    } else {
      for (let [key, value] of data.entries()) {
        console.log(`${key}: ${value}`);
      }
    }
  });

  function validNameField() {
    const userFullName = document.getElementById("user-full-name");
    const userName = userFullName.value;
    const message = userFullName.parentElement.querySelector(".error-message");

    let validField = true;

    if (!userName | (userName.length < 8)) {
      message.textContent = "Por favor, Insira o seu nome completo.";
      message.style.display = "block";
      validField = false;
    }

    return validField;
  }

  // Verificar os campo de entrada de data

  /* const userBirth = document.getElementById("user-birth-date");
    userBirth.addEventListener("change", function () {
    const birth = userBirth.value;
    console.log(birth);
    console.log(userBirth.value.split("-")[0])} */

  function validBirthDate() {
    const age = document.getElementById("user-age");
    const userBirth = document.getElementById("user-birth-date");
    const birthDate = userBirth.value.split("-");
    const message = userBirth.parentElement.querySelector(".error-message");
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    let userAge = currentYear - Number(birthDate[0]);
    let validField = true;

    if (
      (birthDate[1] > currentMonth) |
      (birthDate[2] > currentDay && birthDate[1] === currentMonth)
    ) {
      userAge--;
    }

    if (userAge < 16) {
      message.textContent =
        "Você deve ter mais de 16 anos para criar uma conta";
      message.style.display = "block";
      validField = false;
    }
    console.log(userAge);
    age.value = userAge;
    return validField;
  }

  function validPasswords() {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const span = confirmPassword.parentElement;
    const message = span.querySelector(".error-message");

    let validField = true;

    if (password.value !== confirmPassword.value) {
      message.textContent = "As senhas não coinsidem";
      message.style.display = "block";
      validField = false;
    }
    return validField;
  }

  function resetErrorMessage() {
    const message = document.querySelectorAll(".error-message");

    for (let i = 0; i < message.length; i++) {
      message[i].textContent = "";
    }
  }
  const userNumberElement = document.getElementById("user-number");
  /* const userNumber = userNumberElement.value
  const numberField = userNumber.replace(/(\d{2} \d{5})(\d{4}))/, function(){ 

  })*/

  userNumberElement.addEventListener("focusin", function (e) {
    const userNumberValue = e.target.value;
    userNumberElement.value = userNumberValue.replace(/[.]/g, "");
  });

  userNumberElement.addEventListener("focusout", function (e) {
    const userNumberValue = e.target.value;
    userNumberElement.value = userNumberValue.replace(
      /(\d{2})(\d{5})(\d{4})/,
      "+55 $1 $2-$3"
    );
  });

  const buttonSignUp = document.getElementById("btn-sign-up");
  const buttonKeepWithGoogle = document.getElementById("btn-keep-google");

  buttonKeepWithGoogle.addEventListener("click", () => {
    buttonKeepWithGoogle.classList.add("clickButton");
    setTimeout(resetButtonsAnimation, 300)
    
  });

  buttonSignUp.addEventListener("click", () => {
    buttonSignUp.classList.add("clickButton");
    setTimeout(resetButtonsAnimation, 300)
    
  })

  function resetButtonsAnimation () {

    buttonSignUp.classList.remove("clickButton");
    buttonKeepWithGoogle.classList.remove("clickButton");
    
  }
});
