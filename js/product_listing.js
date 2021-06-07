// Hide and show filters in product listing
var filter = document.getElementById('filter');
var a = document.getElementById('a');
var Filters_mobile = document.getElementById('Filters_mobile');
filter.addEventListener('click', function() {
        if (a.innerHTML == '1') {
            Filters_mobile.style.visibility = 'visible';
            a.innerHTML = '2'
        } else {
            Filters_mobile.style.visibility = 'hidden';
            a.innerHTML = '1'
        }
    })
    // Notice of successfully adding a product
function addToCart() {
    alert("The item has been added to the cart!");
}