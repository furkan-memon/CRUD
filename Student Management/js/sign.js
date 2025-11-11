let signinLink = document.querySelector(".Sign-In")
let signupLink = document.querySelector(".Sign-Up")
let signinform = document.querySelector("#sign-in")
let signupform = document.querySelector("#sign-up")
let SignUpform = document.querySelector("#sign-up #auth-form")
let SignInform = document.querySelector("#sign-in #auth-form")
let username = document.querySelector("#username")
let email = document.querySelector("#emailup")
let password = document.querySelector("#passwordup")
let conpassword = document.querySelector("#confirm-password")
let Kay = document.querySelector("#kay")
let showpass = document.querySelector("#showPass")
let kayinfo = document.querySelector("#kayinfo")
let chakbox = document.querySelector("#chakbox")
let email_or_username = document.querySelector("#email_or_username")
let Corrct_password = document.querySelector("passwordin") 

signupLink.addEventListener("click", function () {
    signinform.style.display = "none"
    signupform.style.display = "flex"

})
signinLink.addEventListener("click", function () {
    signinform.style.display = "flex"
    signupform.style.display = "none"

})
username.addEventListener("input",function(){
  username.value =   username.value.toLowerCase()
})
function savelocalStorage(obj) {
   let hasEmpty = Object.values(obj).some(value => value.trim() === "");
     if (hasEmpty) {
       alert("Please fill all required fields before submitting.");

    return
    }
    if (localStorage.getItem("userinfo") === null) {
        let olduserinfo = []
        olduserinfo.push(obj)
        localStorage.setItem("userinfo", JSON.stringify(olduserinfo))
    }
    else {
        let olduserinfo = localStorage.getItem("userinfo")
        olduserinfo = JSON.parse(olduserinfo)
        olduserinfo.push(obj)
        localStorage.setItem("userinfo", JSON.stringify(olduserinfo))
    }
}
 showpass.addEventListener("change", function () {
        if (password.type === "password") {
            password.type = "text";
            conpassword.type = "text"
        }
        else {
            password.type = "password"
            conpassword.type = "password"

        }
    })
SignUpform.addEventListener("submit", function (e) {
    e.preventDefault()

    let UserName = /^[a-zA-Z0-9._-]{2,16}$/
    let Email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let Password = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

    let usermatch = UserName.test(username.value)
    let Emailmatch = Email.test(email.value)
    let Passwordmatch = Password.test(password.value)
    let valid = true;
    // User name
    if (username.value.trim().length === 0) {
        document.querySelector("#username-error").textContent = "Please vease fill out this fild"
        username.style.borderColor = "#DC3545"
        valid = false;
    }
    else if (!usermatch) {
        document.querySelector("#username-error").textContent = "Invalid characters. Use only letters, numbers, hyphens (-), underscores (_), or dots."
        username.style.borderColor = "#DC3545"
        valid = false;
    }
    else if (username.value.trim().length < 3) {
        document.querySelector("#username-error").textContent = "Username is too short. It must be between 3 and 16 characters."
        username.style.borderColor = "#DC3545"
        valid = false;
    }
    else if (username.value.trim().length > 16) {
        document.querySelector("#username-error").textContent = "Username is too short. It must be between 3 and 16 characters."
        username.style.borderColor = "#DC3545"
        valid = false;
    }
    else {
        document.querySelector("#username-error").textContent = ""
        username.style.borderColor = "#E5E7EB"

    }
    // Email
    if (email.value.trim().length === 0) {
        document.querySelector("#emailup-error").textContent = "Please vease fill out this fild"
        email.style.borderColor = "#DC3545"
        valid = false;
    }
    else if (!Emailmatch) {
        document.querySelector("#emailup-error").textContent = "Invalid characters. Use only letters, numbers, hyphens (-), underscores (_), or dots."
        email.style.borderColor = "#DC3545"
        valid = false;
    }

    else {
        document.querySelector("#emailup-error").textContent = ""
        email.style.borderColor = "#E5E7EB"

    }
    // password
    if (password.value.trim().length === 0) {
        document.querySelector("#passwordup-error").textContent = "Please vease fill out this fild"
        password.style.borderColor = "#DC3545"
        valid = false;
    }
    else if (!Passwordmatch) {
        document.querySelector("#passwordup-error").textContent = "Invalid characters. Use only letters, numbers, hyphens (-), underscores (_), or dots."
        password.style.borderColor = "#DC3545"
        valid = false;
    }

    else {
        document.querySelector("#passwordup-error").textContent = ""
        password.style.borderColor = "#E5E7EB"
    }
    // conform-pass
    if (password.value.trim().length != 0 && Passwordmatch && conpassword.value.trim().length == 0) {
        document.querySelector("#confirm-error").textContent = "Please confirm your password.  "
        conpassword.style.borderColor = "#DC3545"
        valid = false;
    }
    else if (password.value.trim() != conpassword.value.trim()) {
        document.querySelector("#confirm-error").textContent = "Passwords do not match"
        conpassword.style.borderColor = "#DC3545"
        valid = false;
    }

    else {
        document.querySelector("#confirm-error").textContent = ""
        conpassword.style.borderColor = "#E5E7EB"
    }
//    kay
if (Kay.value.trim().length === 0) {
        document.querySelector("#kay-error").textContent = "Please vease fill out this fild"
        Kay.style.borderColor = "#DC3545"
        valid = false;
    }
    else{
        document.querySelector("#kay-error").textContent = ""
        Kay.style.borderColor = "#E5E7EB" 
    }
    kayinfo.addEventListener("click", function () {
        alert(`1. This key will help you reset your password if you ever forget it — keep it safe and don’t share it with anyone.
        2. Create a secure key with 6–12 characters using letters and numbers only. You’ll need it to reset your password later.`)
    })
    // chakbox
    if (!chakbox.checked) {
        document.querySelector("#checkbox-error").textContent = 'You must agree to the terms.'
    }
    else {
        document.querySelector("#checkbox-error").textContent = ''
    }

    if(usermatch && Emailmatch && Passwordmatch) {

        savelocalStorage({
            Username : username.value.trim().toLowerCase(),
            Email : email.value.trim(),
            Password : password.value.trim(),
            Kay : Kay.value.trim()
        })
    
        SignUpform.reset()
         signinform.style.display = "flex"
    signupform.style.display = "none"
    }

})
 SignInform.addEventListener("submit",function(e){
  e.preventDefault()
  let Alluser = JSON.parse(localStorage.getItem("userinfo"))
  let inp_value = email_or_username.value.trim().toLowerCase()
  
  let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  let finduser;
  if(emailregex.test(inp_value)){
    finduser = Alluser.find(u => (u.Email).toLowerCase() === inp_value)

   }
   else{
 finduser = Alluser.find(u => (u.Username).toLowerCase()=== inp_value)
   }
   if(finduser){
    let Saveusername = finduser.Username
   let SavePassword = finduser.Password
   let SaveEmail = finduser.Email
   let SaveKay = finduser.Kay
   console.log(finduser);
   console.log(finduser.Password);
   
   
   }
   else{
    console.log("user");
    
   }
})




//  let usermatch = UserName.test(username.value)
//     let Emailmatch = Email.test(email.value)
//     let Passwordmatch = Password.test(password.value)
