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

// Starting conditions

    // Cart
        let itemCart = []
// API
    // URL 
        const URL = 'https://frontendkenterik.no/slugapi/wp-json/wc/v3'
    // API key
        // Consumer key
            const consumerKey = 'ck_8f55f41cea38bcdce6b841f8b574f843ed50c8a0';
        // Consumer Secret 
            const consumerSecret = 'cs_678bce6da556ca86c5357207a0359e2f4200fe0c';
    // End Point
        // Product
            const  epProduct = '/products';
    