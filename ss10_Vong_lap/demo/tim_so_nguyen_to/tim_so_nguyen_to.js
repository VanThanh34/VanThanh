let n = +prompt("Mời nhập vào 1 số");
let count = 0;
for (let i = 1; i <= n; i++) {

    if (n % i === 0) {
        count++;
    }
}

if (count === 2) {
    alert("Số " + n + " là số nguyên tố");
}