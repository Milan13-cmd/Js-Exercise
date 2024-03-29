// checked = property that determine the checked state of an
//  Html checkbox or radio btn element

const mycheckbox = document.getElementById("mycheckbox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn= document.getElementById("paypalBtn");
const mysubmit = document.getElementById("mysubmit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

mysubmit.onclick = function(){

    if(mycheckbox.checked){
        subresult.textContent ='you are subscribed';
    }

    else{
        subresult.textContent ='you arent subscribed';

    }

    if(visaBtn.checked){
        paymentresult.textContent ='You are paying the visa';
    }
    else if(mastercardBtn.checked){
        paymentresult.textContent ="you are paying with mastercard";
    }

    else if(paypalBtn.checked){
        paymentresult.textContent ='you are paying with paypal';
    }

    else{
        paymentresult.textContent ="you must selected";
    }
}