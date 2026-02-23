document.addEventListener("DOMContentLoaded", function() {
  
  let form = document.getElementById("loginform");
  
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    
    let emailError = document.getElementById("emailerror");
    let passError = document.getElementById("passworderror");
    let successMsg = document.getElementById("successMsg");
    
    // reset
    emailError.innerText = "";
    passError.innerText = "";
    successMsg.innerText = "";
    
    let valid = true;
    
    if (email === "") {
      emailError.innerText = "Email is required";
      valid = false;
    } else if (!email.includes("@")) {
      emailError.innerText = "Enter valid email";
      valid = false;
    }
    
    if (password === "") {
      passError.innerText = "Password is required";
      valid = false;
    } else if (password.length < 6) {
      passError.innerText = "Password must be at least 6 characters";
      valid = false;
    }
    
    if (valid) {
      successMsg.innerText = "✅ Login Successful!";
      form.reset();
    }
  });
  
});