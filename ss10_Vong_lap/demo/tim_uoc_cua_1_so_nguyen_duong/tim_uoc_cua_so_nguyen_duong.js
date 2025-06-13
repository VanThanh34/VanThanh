/*
let sum = "";

const numbers = [65, 44, 12, 4];

numbers.forEach(myFunction);



document.getElementById("demo").innerHTML = sum;



function myFunction(item) {

    sum += item;

}*/

/*
//in ra hello và nhấn q hoặc không nhấn gì để thoát vòng lặp
let text ="hello";
while(text !== "q" && text !==""){
    document.write(text + "<br>");
    text = prompt("Enter word. Type 'q' to quit the mess");
}*/

//tìm ước của 1 số nguyên dương

let n = +prompt("Nhập vào 1 số nguyên");
for (let i = 1; 1 <= n; i++){
    if(n%i === 0){
        alert("ước của số là: " + i);
    }
}