/*
let arrNum = [1,2,3,5,6,7];
let arrStr = ["one", "two", "Three"];
let arrMix = ["1","two", "3", "four"];
    // arrStr[0] = ["one"];
// for (let i = 0; i < arrStr.length; i++) {
//     document.write(`${arrStr[i]} `);
// }
arrMix.sort();
// arrNum.splice(3,0,"4");
let n = arrStr[0];

document.write(n.charAt(0));*/


let a = [];
let add = document.getElementById("btn");
add.addEventListener("click", onAdd);
let display = document.getElementById("btn2");
display.addEventListener("click", onDisplay);

function onAdd() {
    let input = document.getElementById("addNum").value;
    a.push(input);
    console.log(a);
}

function onDisplay() {
    let result = "<hr/>";
    if (a.length > 0) {
        for (let i = 0; i < a.length; i++) {
            result += `element `+i+`=`+a[i]+`<br>`;
        }
    }
    document.getElementById("display").innerHTML= result;
}
