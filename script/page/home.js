// use strict 
    'use strict';
// Check api Interval
    const startIntervalHome = setInterval(checkAPICall, 3000);

// Check cart 
function checkcart(){
    localStorage.setItem('localCart', JSON.stringify(itemCart));
    // console.log(localcart.length)

}

function checkAPICall() {
    if(APICall === true && objectCopy === true) {
        CreatProSec()
        clearinterval(startIntervalHome);
    }
}

// Clear Interval 
    // Value1 Is the function 
    function clearinterval(value1) {
        clearInterval(value1);
    }

// Create Product Section
function CreatProSec() {
    // SnugObj is the object contain product
    // Slice only show max 4 
    // forEach loop true 
    snugObj.forEach(sg => {
        // Console Log the loop
        // console.log(sg)
        homeProductcontent.innerHTML += `
            <div class="product-card" onclick="">
                <img src="${sg.images[0].src}" alt="${sg.images[0].alt}" class="img-product" onclick="location.href='product.html?id=${sg.id}'">
                <div class="product-title">
                    <h3 clas="heading-product">
                        ${sg.name}
                    </h3>
                </div>
                <div class="product-description">
                    ${sg.short_description}
                </div>
                <ul>
                    <li>
                        Kr ${sg.price},-
                    </li>
                    <li>
                       <button class="link-buy" id="${sg.id}" onclick="clickbuy(${sg.id})">Buy</button>
                    </li>
                </ul>
            </div>
        `
    });
}
checkcart()