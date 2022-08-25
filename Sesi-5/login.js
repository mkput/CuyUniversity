// this function use to login to the web either as a admin or a usual user
// and this function will check the data of user in the local storage of browser, except admin
function onLogin(){
  const username = localStorage.getItem('username')
  const password = localStorage.getItem('password')

  const usernameInput = document.getElementById('usernameInput')
  const passwordInput = document.getElementById('passwordInput')
  
  if (usernameInput.value === 'admin' && passwordInput.value === 'admin123') {
    localStorage.setItem("usernameLogin", "admin")
    localStorage.setItem("role", 'admin')

    login.style.display = "none"
    dashboardAdmin.style.display = "block"
  } else if (username === usernameInput.value && password === passwordInput.value){
    localStorage.setItem("usernameLogin", usernameInput.value)
    localStorage.setItem("role", 'basic')

    login.style.display = "none"
    dashboardUser.style.display = 'block'
  } else {
    alert('Username atau Password tidak valid!')
  }
}