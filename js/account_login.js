// Check data entered - Mobile Login
var Email_Address_login = document.getElementById('email_address_login');
var Password_login = document.getElementById('password_login');
var login_m = document.getElementById('login_m');
login_m.onclick = function() {
    if (Email_Address_login.value == '' || Password_login.value == '') {
        alert('The content cannot be empty！');
    } else {
        alert('Welcome!');
    }
}