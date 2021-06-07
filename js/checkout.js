// Checkout Form
// Customer Information to Shipping Address (Hide Customer Information/Show Shipping Address)
var fistName = document.getElementById('fistName');
var lastName = document.getElementById('lastName');
var email_address = document.getElementById('email_address');
var a = document.getElementById('Continue');
var middle_userInfo = document.getElementById('middle_userInfo');
var middle_userInfo_two = document.getElementById('middle_userInfo_two');
var middle_page_first_title_change = document.getElementById('middle_page_first_title_change');
var middle_page_first_title = document.getElementById('middle_page_first_title');
var back_btn = document.getElementById('back_btn');
a.onclick = function() {
    if (fistName.value == '' || lastName.value == '' || email_address.value == '') {
        alert('The content cannot be empty！');
    } else {
        middle_userInfo_two.style.display = 'flex';
        middle_userInfo.style.display = 'none';
        middle_page_first_title_change.style.cssText = 'background-color:#000;color:#fff;'
        middle_page_first_title.style.cssText = 'background-color:#E5E3E3;color:#000;'
    }
}
back_btn.onclick = function() {
    middle_userInfo_two.style.display = 'none';
    middle_userInfo.style.display = 'flex';
    middle_page_first_title_change.style.cssText = 'background-color:#E5E3E3;color:#000;'
    middle_page_first_title.style.cssText = 'background-color:#000;color:#fff;'
}
var btn_continue = document.getElementById('btn_continue');
var first_Name = document.getElementById('first_Name');
var last_Name = document.getElementById('last_Name');
var email_Address = document.getElementById('email_Address');
var pc_title = document.getElementById('pc_title');
var pc_titles = document.getElementById('pc_titles');
var top_page_user = document.getElementById('top_page_user');
var top_page_user1 = document.getElementById('top_page_user1');
var btn_back = document.getElementById('btn_back');
btn_continue.onclick = function() {
    if (first_Name.value == '' || last_Name.value == '' || email_Address.value == '') {
        alert('The content cannot be empty！');
    } else {
        pc_title.style.backgroundColor = '#E5E3E3';
        pc_title.style.color = '#000';
        pc_titles.style.backgroundColor = '#000';
        pc_titles.style.color = '#fff';
        top_page_user.style.display = 'none';
        top_page_user1.style.display = 'flex';
    }
}
btn_back.onclick = function() {
        pc_title.style.backgroundColor = '#000';
        pc_title.style.color = '#fff';
        pc_titles.style.backgroundColor = '#E5E3E3';
        pc_titles.style.color = '#000';
        top_page_user.style.display = 'flex';
        top_page_user1.style.display = 'none';

    }
    // Shipping Address to Payment (Hide Shipping Address/Show Payment)
var City = document.getElementById('P_City');
var Country = document.getElementById('P_Country');
var Street_Name = document.getElementById('P_Street_Name');
var Street_No = document.getElementById('P_Street_No');
var Address = document.getElementById('P_Address');
var Postcode = document.getElementById('P_Postcode');
var phone_No = document.getElementById('P_phone_No');
var pc_titles2 = document.getElementById('pc_titles2');
var top_page_user2 = document.getElementById('top_page_user2');
var btn_continue_two = document.getElementById('btn_continue_two');
var btn_back_Payment = document.getElementById('btn_back_Payment');
btn_continue_two.onclick = function() {
    if (City.value == '' || Country.value == '' || Street_Name.value == '' || Street_No.value == '' || Address.value == '' || Postcode.value == '' || phone_No.value == '') {
        alert('The content cannot be empty！');
    } else {
        pc_titles.style.backgroundColor = '#E5E3E3';
        pc_titles.style.color = '#000';
        pc_titles2.style.color = '#fff';
        pc_titles2.style.backgroundColor = '#000';
        top_page_user2.style.display = 'flex';
        top_page_user1.style.display = 'none';
    }
}
btn_back_Payment.onclick = function() {
    pc_titles.style.backgroundColor = '#000';
    pc_titles.style.color = '#fff';
    pc_titles2.style.color = '#000';
    pc_titles2.style.backgroundColor = '#E5E3E3';
    top_page_user2.style.display = 'none';
    top_page_user1.style.display = 'flex';
}

var md_continue_Shipping = document.getElementById('md_continue_Shipping');
var md_City = document.getElementById('m_City');
var md_Country = document.getElementById('m_Country');
var md_Street_Name = document.getElementById('m_Street_Name');
var md_Street_No = document.getElementById('m_Street_No');
var md_Address = document.getElementById('m_Address');
var md_Postcode = document.getElementById('m_Postcode');
var md_phone_No = document.getElementById('m_phone_No');
var middle_page_first_title_change2 = document.getElementsByClassName('middle_page_first_title_change2')[0];
var middle_userInfo_three = document.getElementById('middle_userInfo_three');
var back_btn_Payment = document.getElementById('back_btn_Payment');
md_continue_Shipping.onclick = function() {
    if (md_City.value == '' || md_Country.value == '' || md_Street_Name.value == '' || md_Street_No.value == '' || md_Address.value == '' || md_Postcode.value == '' || md_phone_No.value == '') {
        alert('The content cannot be empty！');
    } else {
        middle_page_first_title_change2.style.backgroundColor = '#000';
        middle_page_first_title_change2.style.color = '#fff';
        middle_page_first_title_change.style.backgroundColor = '#E5E3E3';
        middle_page_first_title_change.style.color = '#000';
        middle_userInfo_two.style.display = 'none';
        middle_userInfo_three.style.display = 'flex'
    }
}
back_btn_Payment.onclick = function() {
        middle_page_first_title_change2.style.backgroundColor = '#E5E3E3';
        middle_page_first_title_change2.style.color = '#000';
        middle_page_first_title_change.style.backgroundColor = '#000';
        middle_page_first_title_change.style.color = '#fff';
        middle_userInfo_two.style.display = 'flex';
        middle_userInfo_three.style.display = 'none'
    }
    // Purchase Confirmation
var Credit_Card_Number = document.getElementById('credit_card_number');
var Exp_Month = document.getElementById('exp_month');
var Exp_Year = document.getElementById('exp_year');
var CVV = document.getElementById('cvv');
var ff = document.getElementById('finish');
ff.onclick = function() {
    if (Credit_Card_Number.value == '' || Exp_Month.value == '' || Exp_Year.value == '' || CVV.value == '') {
        alert('The content cannot be empty！');
    } else {
        alert('Thanks for your purchase!');
    }
}

var md_Credit_Card_Number = document.getElementById('md_credit_card_number');
var md_Exp_Month = document.getElementById('md_exp_month');
var md_Exp_Year = document.getElementById('md_exp_year');
var md_CVV = document.getElementById('md_cvv');
var md_finish = document.getElementById('finishs');
md_finish.onclick = function() {
    if (md_Credit_Card_Number.value == '' || md_Exp_Month.value == '' || md_Exp_Year.value == '' || md_CVV.value == '') {
        alert('The content cannot be empty！');
    } else {
        alert('Thanks for your purchase!');
    }
}