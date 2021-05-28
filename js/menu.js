window.onload = function() {
    var menu = document.getElementById('m');
    var m_list = document.getElementById('m_list');
    var close = document.getElementById('close');
    var store = document.getElementById('store');
    var open = document.getElementById('open');
    var jiahao = document.getElementById('jiahao');
    var m_list_desktop = document.getElementById('m_list_desktop');
    var pc_store = document.getElementById('pc_store');
    var test = document.getElementById('test');
    var search = document.getElementById('searchs');
    var search_f = document.getElementById('search_f');
    var test2 = document.getElementById('test2');
    menu.onclick = function() {
        m_list.style.display = 'block';
    }

    close.onclick = function() {
        m_list.style.display = 'none';
    }

    store.addEventListener('click', function() {
        if (jiahao.innerHTML == '+') {
            open.style.display = 'block';
            jiahao.innerHTML = '-'

        } else {
            open.style.display = 'none';
            jiahao.innerHTML = '+'
        }
    })

    search.onclick = function() {
        if (test2.innerHTML == '1') {
            search_f.style.visibility = 'visible';
            test2.innerHTML = '2';
            search.src = '../images/close-mobile.png';
        } else {
            search_f.style.visibility = 'hidden';
            test2.innerHTML = '1';
            search.src = '../images/../images/search.png';
        }
    }
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


}