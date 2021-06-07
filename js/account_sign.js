// Check data entered - Mobile SignUp
var Full_Name_m = document.getElementById('full_name_m');
var Email_Address_m = document.getElementById('email_address_m');
var Password_m = document.getElementById('password_m');
var Confirm_Password_m = document.getElementById('confirm_password_m');
var register_m = document.getElementById('register_m');
register_m.onclick = function() {
    if (Full_Name_m.value == '' || Email_Address_m.value == '' || Password_m.value == '' || Confirm_Password_m.value == '') {
        alert('The content cannot be empty！');
    } else {
        alert('Welcome!');
    }
}