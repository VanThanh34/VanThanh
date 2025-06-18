let n;
let arrNum = [-3, 5, 1, 3, 2, 10];
let found;
while (true) {
    n = +prompt("Hãy nhập vào 1 số:");
    found = false;
    if (!isNaN(n) && n > 0) {
        for (let i = 0; i < arrNum.length; i++) {
            if (n === arrNum[i]) {
                alert(`Bạn đã đoán đúng! Đó là số ${n}`);
                found = true;
                break;
            }
        }
        if (!found) {
            alert(`Không tìm thấy phần tử`);
        }
    } else alert("Mời nhập lại số hợp lệ.");
}