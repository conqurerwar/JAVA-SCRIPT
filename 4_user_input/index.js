//Easy way to create window prompt
//professional way = html textbox

//let username;
// username = window.prompt("Enter your username");
// console.log(username)

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myInput").value;
    document.getElementById("myH2").textContent = `Hello ${username}`;
}