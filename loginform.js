const form = document.getElementById("loginform")
const email = document.getElementById("email")
const password = document.getElementById("password")

const emailerror = document.getElementById("emailerror")
const passworderror = document.getElementById("passworderror")
const successMsg = document.getElementById("successMsg")

form.addEventListener("submit", function(e) {
  e.preventDefault();
  
  emailerror.textContent = "";
  passworderror.textContent = "";
  successMsg.textContent = "";
  
  let isValid = true;
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  
  if(email.value.trim()==="") {
    emailerror.textContent = "email is required"
    isValid = false;
  } else if(!email.value.match(emailPattern)) {
    emailerror.textContent = "Enter valid email address"
    isValid = false;
  }
  
  if(password.value.trim()==="") {
    passworderror.textContent = "password is required"
    isValid = false
  } else if(password.value.length<8) {
    passworderror.textContent = "password must be 8 character"
    isValid = false
  }
  

if(isValid) {
  successMsg.textContent = "login successful"
}
})


