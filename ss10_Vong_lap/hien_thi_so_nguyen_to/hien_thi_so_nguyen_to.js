let num = +prompt("Mời nhập số lượng cần in ra");
let count = 0;
let n = 2;
let primeNum = true;
while (count < num) {
    //chỉ kiểm tra đến căn bậc 2 của n vì nếu n chia hết cho số nào lớn hơn căn bậc hai của n thì nó đã chia hết cho 1 số nhỏ hơn rồi
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            primeNum = false;
            break;
        }
    }
    if (primeNum) {
        alert(`Số nguyên tố thứ ${count + 1}: ${n}`)
        count++;
    }
    n++;
}
