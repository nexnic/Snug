// Using stric
'using strict';
// DOM Tree 
    // Header 
        // Navigation
            // Cart Amount
                const cartItem = document.querySelector('.cart-amount');
            // Hamburger Menu   
                const hamburger = document.querySelector('.hamburger-icon');
            // Nav Menu
                const nav = document.querySelector('.menu');
            
    // Main 
        // Home page 
            // Product Section 
                const homeProduct = document.querySelector('.pd');
            // Product Heading 
                const homeProductHead = document.querySelector('.pd-heading');
            // product Content 
                const homeProductcontent =  document.querySelector('.pd-content');
        // Product
            const product = document.querySelector('.product');
        // product Text
            const producttxt = document.querySelector('.product__txt');
        // product Content
            const productcontent = document.querySelector('.Product__content');
        // Cart page 
            // Cart Summary 
                const cartSummary = document.querySelector('.cart-sum');
            // Cart totall price
                const cartPrice = document.querySelector('.cart-price');
            // Cart continue button 
                const continuebtn = document.querySelector('#continue-btn')    
            // cart Check Out button
                const checkbtn = document.querySelector('#checkout-btn');
        // Checkout Page 
            // Checkout Button 
                const placeorder = document.querySelector('#place-order');
            // Complett order
                const complett = document.querySelector('.product-done');

// Starting conditions
    // Check api call
        const startInterval = setInterval(CheckInterval, 3000);
    // API call
        let APICall = false;
    // Object Copy
        let objectCopy = false;
    // Cart
        // array
            let itemCart = []
           
        // Cart amount
            let cartAmount;
            const Getcart = JSON.parse(localStorage.getItem('localCart'))
    // Product Object 
        let snugObj
    // Getting Page your are on
        let path = window.location.pathname;

        

// API
    // URL 
        const URL = 'https://frontendkenterik.no/slugapi/wp-json/wc/v3'
    // API key
        // Consumer key
            const consumerKey = 'ck_8f55f41cea38bcdce6b841f8b574f843ed50c8a0';
        // Consumer Secret 
            const consumerSecret = 'cs_678bce6da556ca86c5357207a0359e2f4200fe0c';
        // auth
            let auth = bAuth(consumerKey, consumerSecret);
    // End Point
        // Product
            const  epProduct = '/products';
// URL 
    // Search 
        const urlSearch = document.location.search
    // test
        const test = new URLSearchParams(urlSearch);
    // 
        let id = test.get("id");
// Auto
function bAuth(key, secret) {
    let hash = btoa(key + ':' + secret);
        return 'Basic ' + hash;
}

// Checking API Call 
function CheckInterval() {
    console.log('checking call')
    if(APICall === true && objectCopy === true) {
        // Need to make a clear interval
        console.log('complett')
        clearinterval(startInterval);
        
    }
}

// Clear Interval 
    // Value1 Is the function 
    function clearinterval(value1) {
        clearInterval(value1);
    }


// Click Buy button
    // Value1 === id
function clickbuy(value1){
    // Console log value1
    // console.log(value1)
    // Send id to new function to add to cart
    addToCart(value1)
}

// add item to cart
    // value1 is id
function addToCart(value1) {
    // Console log the value1
    console.log(value1);
    // Finden the index of object 
    const index = snugObj.findIndex((snugObj) => snugObj.id === value1);
    // Console Log the index of object to check if true
    console.log(index)
    // let add to new object itemCart
    itemCart.push({
        id:`${snugObj[index].id}`,
        name:`${snugObj[index].name}`,
        image:`${snugObj[index].images[0].src}`,
        alt:`${snugObj[index].images[0].alt}`,
        price:`${snugObj[index].price}`,
    })
    let test = itemCart.length
    cartAmount = test
    cartItem.innerHTML = `
        ${cartAmount}
    `
    localcart();
}

function localcart() {
    localStorage.setItem('localCart', JSON.stringify(itemCart));
}

// Createcart 
    // Value1 is object of what inside the cart
function createCartPage(){
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

function totalPrice(){
    let sum = 0;
    for(let e = 0; e < Getcart.length; e++){
        sum += parseInt(Getcart[e].price)
        console.log(sum)
    }
    cartPrice.innerHTML += `
       Nok ${sum},-
    `
}

// Click Cart 
function clickcart() {
    console.log('-- click --')
    const objecttest = JSON.stringify(cartItem);

    location.href='cart.html'
}

// Add Evente Listenere
//checkbtn.addEventListener('click', clickCheckout);

// Click Checkout
function clickCheckout(){
    location.href='checkout.html';
}



hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
}


function closeMenu() {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
}