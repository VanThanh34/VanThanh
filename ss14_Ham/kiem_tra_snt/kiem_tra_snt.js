let n = +prompt("Mời nhập 1 số");
function primeNum(n){
    for (let i = 2; i <= Math.sqrt(n) ; i++) {
        if(n%i === 0) {
            alert(`Số ${n} không phải là số nguyên tố`);
            return;
        }
    }
    alert(`Số ${n} là số nguyên tố.`);
}
if(!isNaN(n) && n >1){
    primeNum(n);
}else {
    alert("Mời nhập số hợp lệ!")
}