// const min = 50;
// const max = 100;


// let randNum = Math.floor(Math.random()*(max-min)) + min;

// console.log(randNum);

const myBtn = document.getElementById("myBtn");
const myLabel = document.getElementById("myLabel");

const min = 1;
const max = 6;
let randNum = Math.floor(Math.random()*(max-min)) + min;

myBtn.onclick = function(){
    randNum = Math.floor(Math.random()*(max-min)) + min;
    myLabel.textContent = randNum;
}
