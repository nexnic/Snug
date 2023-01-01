// Use Strict mode
    'use strict';

// value1 API end Point
async function apiSnug(value1){

    try {
        const respons = await fetch(URL + value1, {
            headers: {
                Authorization: bAuth(consumerKey, consumerSecret)}
        } )
        const result = await respons.json();
        copyObject(result)
    } catch(error){
        console.log(error)
    }finally {
        APICall = true
    }
}

// Copy object to onsite 
    // Value1 objec
function copyObject(value1) {
    snugObj = value1
    // if true then sett objectCopy true
    if(value1.lenght === snugObj.lenght){
        objectCopy = true
    // Else error box
    }else{
        console.log(error);
    }
}

apiSnug(epProduct);