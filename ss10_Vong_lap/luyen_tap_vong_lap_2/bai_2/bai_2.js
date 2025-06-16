let n = +prompt(`Hãy nhập số`);
let factorial =1;
if (!isNaN(n)) {
for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
}
alert(`${n}! =  ${factorial}`);
} else {
    alert(`Mời nhập số hợp lệ!`);
}