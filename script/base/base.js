// Using stric
'using strict';
// DOM Tree 
    // Header 
        // nav
            const nav = document.querySelector('#nav');
        // nav Desktop Version
            const navDesktop = document.querySelector('.nav__desktop');
        // nav Mobil Version
            const navMobil = document.querySelector('.nav__mobil');
    // Main 
        // Product
            const product = document.querySelector('product');
        // product Text
            const producttxt = document.querySelector('product__txt');
        // product Content
            const productcontent = document.querySelector('product__content');
// Starting conditions
    // Check api call
        const startInterval = setInterval(CheckInterval, 3000);
    // API call
        let APICall = false;
    // Object Copy
        let objectCopy = false;
    // Cart
        let itemCart = []
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
        productHome();
        checkPage();
    }
}

// Clear Interval 
    // Value1 Is the function 
    function clearinterval(value1) {
        clearInterval(value1);
    }

// Check Page 
function checkPage(){
    let home = '/index.html';

    if(path === home){
        console.log('Home');
    }


}
