const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");
let warning = document.getElementById("warning");

let count = 0;

decreaseBtn.onclick = function(){
    count--;
    if(count < 0)
    {
        warning.textContent = `!!!Error you cannot go below 0!!!`;
    }
    else
    {
    warning.textContent = ``
    countLabel.textContent = count;
    }
}
increaseBtn.onclick = function(){
    warning.textContent = ``
    count++;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    warning.textContent = ``
    count = 0;
    countLabel.textContent = count;
}