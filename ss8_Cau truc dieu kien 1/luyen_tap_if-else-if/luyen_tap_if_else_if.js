// let input = document.getElementById("userName");
// let send = document.getElementById("send");
// let password = document.getElementById("passWord");
// let sendPass = document.getElementById("sendPass");
// sendPass.addEventListener("click", sendPass);
// send.addEventListener("click", onSend);
//
// function onSend() {
//
//
//     if (input.value === "Admin") {
//         document.getElementById("yeucaupass").innerHTML = "Bạn hãy nhập mk!"
//     } else if (function sendPass()) {
//         if (password.value === "TheMaster") {
//             document.getElementById("trave").innerHTML = "Welcome!";
//         }
//     } else if (input.value === null) {
//         document.getElementById("yeucaupass").innerText = "Canceled";
//     } else {
//         document.getElementById("yeucaupass").innerText = "I dont know you!!!";
//     }
// }

let userName = prompt("Bạn là ai nhể?", "");

if (userName.value === "Admin") {
    let passWord = prompt("Mật khẩu? ");
    if (passWord.value === "The Master") {
        alert("Welcome!");
    } else if (passWord.value === "") {
        alert("Canceled");
    } else alert("Wrong Password!");
} else if (userName === "") {
    alert("Canceled");
} else {
    alert("I dont know you!!!");
}
