

let cart_total=0;
// Slide-1
// card-1
document.getElementById('K-accesories-p-btn').addEventListener('click', function () {
    const product_price=parseFloat(document.getElementById('k-accesories-price').innerText);
    const li= document.createElement('li');
    li.innerText= document.getElementById('k-accesories').innerText;
    document.getElementById('cart_list').appendChild(li);
    cart_total+=product_price;
    updateCartTotal();
});
// card-2
document.getElementById('k-accesories-2-p-btn').addEventListener('click', function () {
    const product_price=parseFloat(document.getElementById('k-accesories-2-price').innerText);
    const li= document.createElement('li');
    li.innerText= document.getElementById('k-accesories-2').innerText;
    document.getElementById('cart_list').appendChild(li);
    cart_total+=product_price;
    updateCartTotal();
});
// card-3
document.getElementById('home-cooker-p-btn').addEventListener('click', function () {
    const product_price=parseFloat(document.getElementById('home-cooker-price').innerText);
    const li= document.createElement('li');
    li.innerText= document.getElementById('home-cooker').innerText;
    document.getElementById('cart_list').appendChild(li);
    cart_total+=product_price;
    updateCartTotal();
});
// slide-2
// card-1
document.getElementById('sports-cap-p-btn').addEventListener('click', function () {
    const product_price=parseFloat(document.getElementById('sports-cap-price').innerText);
    const li= document.createElement('li');
    li.innerText= document.getElementById('sports-cap').innerText;
    document.getElementById('cart_list').appendChild(li);
    cart_total+=product_price;
    updateCartTotal();
});
// card-2
document.getElementById('jursey-set-p-btn').addEventListener('click', function () {
    const product_price=parseFloat(document.getElementById('jursey-set-price').innerText);
    const li= document.createElement('li');
    li.innerText= document.getElementById('jursey-set').innerText;
    document.getElementById('cart_list').appendChild(li);
    cart_total+=product_price;
    updateCartTotal();
});
// card-3
document.getElementById('sports-cates-p-btn').addEventListener('click', function () {
    const product_price=parseFloat(document.getElementById('sports-cates-price').innerText);
    const li= document.createElement('li');
    li.innerText= document.getElementById('sports-cates').innerText;
    document.getElementById('cart_list').appendChild(li);
    cart_total+=product_price;
    updateCartTotal();
});
// slide-3
// card-1
document.getElementById('relax-chair-p-btn').addEventListener('click', function () {
    const product_price=parseFloat(document.getElementById('relax-chair-price').innerText);
    const li= document.createElement('li');
    li.innerText= document.getElementById('relax-chair').innerText;
    document.getElementById('cart_list').appendChild(li);
    cart_total+=product_price;
    updateCartTotal();
});
// card-2
document.getElementById('children-play-p-btn').addEventListener('click', function () {
    const product_price=parseFloat(document.getElementById('children-play-price').innerText);
    const li= document.createElement('li');
    li.innerText= document.getElementById('children-play').innerText;
    document.getElementById('cart_list').appendChild(li);
    cart_total+=product_price;
    updateCartTotal();
});
// card-3
document.getElementById('flexible-sofa-p-btn').addEventListener('click', function () {
    const product_price=parseFloat(document.getElementById('flexible-sofa-price').innerText);
    const li= document.createElement('li');
    li.innerText= document.getElementById('flexible-sofa').innerText;
    document.getElementById('cart_list').appendChild(li);
    cart_total+=product_price;
    updateCartTotal();
});


// --------------------------------------------------------------------------
function updateCartTotal() {
    const total_show = document.getElementById('total_price');
    total_show.innerText = cart_total.toFixed(2);
    document.getElementById('Total_Amount').innerText=cart_total.toFixed(2);

    if (total_show.innerText > 0) {
        document.getElementById('purchase-btn').removeAttribute('disabled');
    } 

    if (parseFloat(total_show.innerText) >= 200) {
        document.getElementById('cupon_btn').removeAttribute('disabled');
    }
}

document.getElementById('cupon_btn').addEventListener('click', function () {
    const cuponField = document.getElementById('cupon_field').value;
    if (cuponField === 'SELL200') {
        const discount = parseFloat(cart_total * 0.20).toFixed(2);
        document.getElementById('Discount').innerText = discount;
        document.getElementById('Total_Amount').innerText = parseFloat(cart_total - discount).toFixed(2);
    }
});
// ---------------------------------------------------------------------------
document.getElementById('go_home').addEventListener('click', function () {
    window.location.href = '';
});





