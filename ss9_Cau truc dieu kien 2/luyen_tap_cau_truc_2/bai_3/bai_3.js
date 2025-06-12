let num1 = +prompt("Mời nhập số đo cạnh");
let dTich = num1 * num1;
if (dTich > 0 && !isNaN(dTich)) {
    alert("Diện tích của hình vuông là: "+ dTich + "m2");
}
else {
    alert("Mời bạn nhập lại!")
}
