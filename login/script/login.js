document.addEventListener("DOMContentLoaded", () => {

   // let userData = [{name: useraName, email: UserEmail, password: UserPassword}]

   const userData = JSON.parse(localStorage.getItem('userInfo')); 
    const $email = document.getElementById('email');
    const $password = document.getElementById('password');
    const $login = document.getElementById("login-btn");
    const $form = document.getElementById('form');
  
  
    $form.addEventListener("submit", e => {
      
      if(!isValidUserInfos()){
        e.preventDefault()
      }
    })

    $login.addEventListener("click", () => {
      $login.classList.add("clickButton");
      setTimeout(() => {
        $login.classList.remove("clickButton");
      }, 300)
    })

    


    
    
    function isValidUserInfos() {
      let validUserInfos = true
      try{

    
        if (
          $email.value !== userData[0].email ||
          $password.value !== userData[0].password
        ) {
          validUserInfos = false
          throw new Error('Email ou Senha é inválidos!');
          
        } 
    
      }catch (error) {
        console.error(error.message);
        notie.alert({ type: 'error', text: error.message });
      }finally{
        return validUserInfos
        
      }
    }
})

