let num1 = +prompt("Nhập điểm bài kiểm tra!");
let num2 = +prompt("Nhập điểm bài thi giữa kì!");
let num3 = +prompt("Nhập điểm bài kiểm tra!");
let tong = (num1 + num2 + num3)/3;
if( num1 >= 0 && num1 <= 10 &&
    num2 >= 0 && num2 <= 10 &&
    num3 >= 0 && num3 <= 10) {
    if (tong > 8) {
        alert("Bạn đạt loại giỏi!!!");
    } else if (tong >= 6.5 && tong <=8 ) {
        alert("Bạn đạt loại khá!")
    } else {
        alert("Bạn đạt loại TB. Bạn cần cố gắng nhiều!")
    }
} else {
    alert("Số bạn không hợp lệ")
}
