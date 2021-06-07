// Homepage desktop menu (hide and show)
var m_list_desktop = document.getElementById('m_list_desktop');
var pc_store = document.getElementById('pc_store');
var test = document.getElementById('test');
pc_store.addEventListener('click', function() {
    if (test.innerHTML == '1') {
        m_list_desktop.style.display = 'block';
        test.innerHTML = '2';
        pc_store.setAttribute('id', 'addClassNames');
    } else {
        m_list_desktop.style.display = 'none';
        test.innerHTML = '1';
        pc_store.setAttribute('id', 'pc_store');
    }

})