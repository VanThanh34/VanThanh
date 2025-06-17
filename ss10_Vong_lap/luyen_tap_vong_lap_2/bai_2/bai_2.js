let n;
let factorial =1;
while(true){
    n = +prompt(`Hãy nhập số`);
if (!isNaN(n)) {
for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
}
alert(`${n}! =  ${factorial}`);
} else {
    alert(`Mời nhập số hợp lệ!`);
}
}