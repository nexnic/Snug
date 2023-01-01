// use strict mode
'use strict';
function localcart() {
    localStorage.setItem('localCart', JSON.stringify(itemCart));
}

// Createcart 
    // Value1 is object of what inside the cart
    function createCartPage(){
        localcart() 
        let amount = Getcart.length;
        console.log(amount)
        cartItem.innerHTML += `
            ${amount}
        `
        totalPrice()
        Getcart.forEach(cart => {
            console.log(cart.name)
            cartSummary.innerHTML += `
                <div class="cart-item">
                    <img src="${cart.image}" alt="${cart.alt}" class="img-product">
                    <div class="cart-item-title">
                        <h2>${cart.name}</h2>
                        <h3>Nok ${cart.price} ,-</h3>
                        <p>Delivery within 2-3 business days.</p>
                        <ul>
                            <li>
                            </li>
                            <li>
                                <button><i class="fa-solid fa-trash-can"></i></button>
                            </li>
                        </ul>
                    </div>
                </div>
            `
        })
    
    }

// Click Checkout
function clickCheckout(){
    location.href='checkout.html';
}

// Click Continue btn
function clickcontinue() {
    location.href='index.html';
}

// Click contiue 
continuebtn.addEventListener('click', clickcontinue)

// Add Evente Listenere
checkbtn.addEventListener('click', clickCheckout)

createCartPage()
