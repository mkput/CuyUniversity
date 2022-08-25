// this code use to change the element of html

let login = document.getElementById('login')   
let signup = document.getElementById('signup')
let signUpSuccess = document.getElementById('signUpSuccess')
let dashboardAdmin = document.getElementById('dashboardAdmin')
let dashboardUser = document.getElementById('dashboardUser')
    
signup.style.display = 'none'
signUpSuccess.style.display = 'none'
dashboardAdmin.style.display = 'none'
dashboardUser.style.display = 'none'

// this function use to show the view of sign up form
function signUpMenu(){
  signup.style.display = 'block'
  login.style.display = 'none'
  signUpSuccess.style.display = "none"
}

// this function use to show the view of login form
function loginMenu(){
  signup.style.display = 'none'
  signUpSuccess.style.display = "none"
  login.style.display = 'block'
}

// this validation use to keep an identity of user until the user logout
if (localStorage.getItem('usernameLogin')) {
  if (localStorage.getItem('role') === 'admin') {
    dashboardAdmin.style.display = "block"
    login.style.display = "none"
  } else {
    dashboardUser.style.display = 'block'
    login.style.display = "none"
  }
}