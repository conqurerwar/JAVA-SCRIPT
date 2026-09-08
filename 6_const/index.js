let radius;
const PI = 3.14159
let circumference;
document.getElementById("cal").onclick = function(){
    radius = document.getElementById("myVal").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH1").textContent = `Circumference: ${circumference}`;
}