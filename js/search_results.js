// Hide and show filters in search results
var Filters_mobile = document.getElementById('Filters_mobile');
var Filters = document.getElementById('Filters');
var a = document.getElementById('a');
Filters.onclick = function() {
        if (a.innerHTML == '1') {
            Filters_mobile.style.visibility = 'visible';
            a.innerHTML = '0';
        } else {
            Filters_mobile.style.visibility = 'hidden';
            a.innerHTML = '1';
        }
    }
    // Notice of successfully adding a product
function addToCart() {
    alert("The item has been added to the cart!");
}