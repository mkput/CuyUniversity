// this is use to logout 
function onLogout(){
  localStorage.removeItem("usernameLogin")
  localStorage.removeItem("role")
  location.reload()
}