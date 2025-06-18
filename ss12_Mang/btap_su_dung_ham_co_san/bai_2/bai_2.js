let num = prompt("Nhập vào chuỗi số:");
let arr = num.split("");
let result = [];

for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);

    let current = parseInt(arr[i]);
    let next = parseInt(arr[i + 1]);

    if (current % 2 === 0 && next % 2 === 0) {
        result.push("-");
    }
}
let output = result.join("");
console.log(output);

