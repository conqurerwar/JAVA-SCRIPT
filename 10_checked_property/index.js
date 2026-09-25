const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked)
    {
        subResult.textContent = "User is subscribed";
    }
    else
    {
        subResult.textContent = "User is not subscribed";
    }

    if(visaBtn.checked)
    {
        paymentResult.textContent = "Your payment type is visa";
    }
    else if(masterCardBtn.checked)
    {
        paymentResult.textContent = "Your payment type is master card";
    }
    else if(paypalBtn.checked)
    {
        paymentResult.textContent = "Your payment type is paypal";
    }
    else
    {
        paymentResult.textContent = "Chose a payment mode";
    }
}