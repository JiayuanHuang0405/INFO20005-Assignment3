// Check data entered - Desktop Login & SignUp
var Email_Address = document.getElementById('email_address');
var Password = document.getElementById('password');
var login = document.getElementById('login');
login.onclick = function() {
    if (Email_Address.value == '' || Password.value == '') {
        alert('The content cannot be empty！');
    } else {
        alert('Welcome!');
    }
}

var Full_Name_s = document.getElementById('full_name');
var Email_Address_s = document.getElementById('email_address_sign');
var Password_s = document.getElementById('password_sign');
var Confirm_Password_s = document.getElementById('confirm_password_sign');
var register = document.getElementById('register');
register.onclick = function() {
    if (Full_Name_s.value == '' || Email_Address_s.value == '' || Password_s.value == '' || Confirm_Password_s.value == '') {
        alert('The content cannot be empty！');
    } else {
        alert('Welcome!');
    }
}