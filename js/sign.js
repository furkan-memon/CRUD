
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
let Corrct_password = document.querySelector("#passwordin")
let showpassin = document.querySelector("#showPassin")
let forget_pass = document.querySelector("#nextpage")
let rest_form = document.querySelector("#resetpaas")
let reshow = document.querySelector("#showresetPass")
let rsetemail = document.querySelector("#rsetemail")
let resetkay = document.querySelector("#resetkay")
let restpass = document.querySelector("#restpassword")
let reconf_pass = document.querySelector("#reconfirm-password")

var user 
var useremail  
let finduser;
let SavePassword;
let Saveusername;
let SaveEmail;
let SaveKay;
signupLink.addEventListener("click", function () {
    signinform.style.display = "none"
    signupform.style.display = "flex"

})
signinLink.addEventListener("click", function () {
    signinform.style.display = "flex"
    signupform.style.display = "none"

})
username.addEventListener("input", function () {
    username.value = username.value.toLowerCase()
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
        conpassword.type = "text";
    }
    else {
        password.type = "password"
        conpassword.type = "password"
    }
})

showpassin.addEventListener("change", function () {
    if (Corrct_password.type === "password") {
        Corrct_password.type = "text";

    }
    else {
        Corrct_password.type = "password"

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
    else {
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

    if (usermatch && Emailmatch && Passwordmatch) {

        savelocalStorage({
            Username: username.value.trim().toLowerCase(),
            Email: email.value.trim(),
            Password: password.value.trim(),
            Kay: Kay.value.trim()
        })

        SignUpform.reset()
        signinform.style.display = "flex"
        signupform.style.display = "none"
        //      
    }

})
SignInform.addEventListener("submit", function (e) {
    e.preventDefault()
    let Alluser = JSON.parse(localStorage.getItem("userinfo"))
    let inp_value = email_or_username.value.trim().toLowerCase()
 
    let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    

    if (emailregex.test(inp_value)) {
        finduser = Alluser.find(u => (u.Email).toLowerCase() === inp_value)

    }
    else {
        finduser = Alluser.find(u => (u.Username).toLowerCase() === inp_value)
    }
    if (email_or_username.value.trim().length == 0) {
        document.querySelector("#us-error").textContent = "Please vease fill out this fild"
        email_or_username.style.borderColor = "#DC3545"
    }
    else if (!finduser) {
        ocument.querySelector("#us-error").textContent = "User is not found"
        email_or_username.style.borderColor = "#DC3545"
    }
    else {
     
        document.querySelector("#us-error").textContent = ""
        email_or_username.style.borderColor = "#E5E7EB"

       
    }



    if (Corrct_password.value.trim().length == 0) {
        document.querySelector("#pas-error").textContent = "Please vease fill out this fild"
        Corrct_password.style.borderColor = "#DC3545"
    }
    else if (Corrct_password.value !=  finduser.Password) {
        document.querySelector("#pas-error").textContent = "Password is incorect"
        Corrct_password.style.borderColor = "#DC3545"
    }
    else {
        document.querySelector("#pas-error").textContent = ""
        Corrct_password.style.borderColor = "#E5E7EB"
    }

    if (Corrct_password.value.trim().length == 0) {
        document.querySelector("#pas-error").textContent = "Please vease fill out this fild"
        Corrct_password.style.borderColor = "#DC3545"
    }
    else if (Corrct_password.value !=  finduser.Password) {
        document.querySelector("#pas-error").textContent = "Password is incorect"
        Corrct_password.style.borderColor = "#DC3545"
    }
    else { 
        document.querySelector("#pas-error").textContent = ""
        Corrct_password.style.borderColor = "#E5E7EB"
    }

    if (finduser && Corrct_password.value === finduser.Password) {
        sessionStorage.setItem('loggedInUser', JSON.stringify({
            username: finduser.Username,
            email: finduser.Email
        }));
      window.location.href = "./html/index.html";
        
    }
}
)
forget_pass.addEventListener("click", function () {
    signinform.style.display = "none"
    rest_form.style.display = "flex"
})
reshow.addEventListener("change", function () {

    if (restpass.type === "password") {
        restpass.type = "text";
        reconf_pass.type = "text";
    }
    else {
        restpass.type = "password"
        reconf_pass.type = "password"
    }

})
rest_form.addEventListener("submit", function (e) {
    e.preventDefault()
    let Alluser = JSON.parse(localStorage.getItem("userinfo"))


    let emailValue = rsetemail.value.trim().toLowerCase();
    let keyValue = resetkay.value.trim();
    let newPass = restpass.value.trim();
    let confirmPass = reconf_pass.value.trim();

    let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let Passwordrgex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/



    if (emailValue == " ") {
        document.querySelector("#reemail-error").textContent = "Please fill out this field"
        rsetemail.style.borderColor = "#DC3545"


    }
    if (!emailregex.test(emailValue)) {
        document.querySelector("#reemail-error").textContent = "Invalid email format";
        rsetemail.style.borderColor = "#DC3545"

    }
    let findUserIndex = Alluser.findIndex(u => u.Email.toLowerCase() === emailValue)

    if (findUserIndex == -1) {

        document.querySelector("#reemail-error").textContent = "User not found";
        rsetemail.style.borderColor = "#DC3545"
    }
    let user = Alluser[findUserIndex]

    if (keyValue === "") {

        document.querySelector("#rekay-error").textContent = "Please fill out this field"
        resetkay.style.borderColor = "#DC3545"
    }
    else if (keyValue != user.Kay) {
        document.querySelector("#rekay-error").textContent = "Key is not matching"
        resetkay.style.borderColor = "#DC3545"
    }

    if (newPass == "") {
        document.querySelector("#passwordup-error").textContent = "Please fill out this field"
        restpass.style.borderColor = "#DC3545"
    }
    if (confirmPass === "") {
        document.querySelector("#reconfirm-error").textContent = "Please confirm your password"
        reconf_pass.style.borderColor = "#DC3545"
    }
    if (newPass !== confirmPass) {
        document.querySelector("#reconfirm-error").textContent = "Passwords do not match"
        reconf_pass.style.borderColor = "#DC3545"

    }

    Alluser[findUserIndex].Password = newPass
    localStorage.setItem("userinfo", JSON.stringify(Alluser))
    alert("Password reset successful. You can now sign in.")
    rest_form.reset()
    signinform.style.display = "flex"
    rest_form.style.display = "none"
})