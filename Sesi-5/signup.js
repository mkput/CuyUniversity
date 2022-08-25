// this function use to validate and send username and password to local storage of browser
function onSignUp(){
  const username = document.getElementById('usernameSign')
  const password = document.getElementById('passwordSign')
  const passwordConfirm = document.getElementById('passwordConfirm')

  if (password.value === passwordConfirm.value) {
    localStorage.setItem("username", username.value)
    localStorage.setItem("password", password.value)
    
    signUpSuccess.style.display = "block"
    login.style.display = "none"
    signup.style.display = "none"
  } else {
    alert('password tidak valid')
  }
}