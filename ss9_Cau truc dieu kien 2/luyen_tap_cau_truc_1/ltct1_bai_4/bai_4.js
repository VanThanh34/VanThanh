let num1 = +prompt("Mời nhập số a");
let num2 = +prompt("Mời nhập số b");
let num3 = +prompt("Mời nhập số c");

if (num1 > num2) {
    if (num1 > num3) {
        alert("Số lớn nhất là số " + num1);
    } else {
        alert("Số lớn nhất là số " + num3);
    }
} else if (num2 > num3) {
    alert("Số lớn nhất là số " + num2);
} else
{
    alert("Số lớn nhất là số " + num3);
}
