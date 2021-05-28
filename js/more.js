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
}