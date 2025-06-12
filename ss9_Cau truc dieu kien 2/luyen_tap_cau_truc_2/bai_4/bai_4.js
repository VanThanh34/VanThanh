let cRong = +prompt("Mời nhập chiều rộng");
let cDai = +prompt("Mời nhập chiều dài");
let dTich = cRong * cDai;

if (dTich > 0 && !isNaN(dTich)) {
    alert("Diện tích là: " + dTich +"m2");
}
else{
    alert("Mời bạn nhập lại.");
}