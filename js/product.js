// Drop_Down Shopping Cart
var checkout = document.getElementById('check');
var shopping_cart_button = document.getElementById('shopping_cart_button');
var drop_down_shopping_cart_mobile = document.getElementById('drop_down_shopping_cart_mobile');
var cartadd = document.getElementById('cartadd');
checkout.onclick = function() {
    drop_down_shopping_cart_mobile.style.visibility = 'visible';
}
shopping_cart_button.onclick = function() {
    drop_down_shopping_cart_mobile.style.visibility = 'hidden';
}

function ab(obj) {
    return document.getElementById(obj);
}

ab('cartadd').onclick = function(event) {
    drop_down_shopping_cart.style.display = 'block';

    stopab(event);
    document.onclick = function() {
        ab('drop_down_shopping_cart').style.display = 'none';

        document.onclick = null
    }
}

ab('drop_down_shopping_cart').onclick = function(event) {
    stopab(event);
}

function stopab(e) {
    if (e && e.stopPropagation) {
        e.stopPropagation();
    } else {
        window.event.cancelBubble = true;
    }
}

ab('check').onclick = function(event) {
    drop_down_shopping_cart_mobile.style.visibility = 'visible';
    stopab(event);
    document.onclick = function() {
        ab('drop_down_shopping_cart_mobile').style.visibility = 'hidden';
        document.onclick = null
    }
}

ab('drop_down_shopping_cart_mobile').onclick = function(event) {
    stopab(event);
}

function stopab(e) {
    if (e && e.stopPropagation) {
        e.stopPropagation();
    } else {
        window.event.cancelBubble = true;
    }
}