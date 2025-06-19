let cRong = +prompt("Mời nhập chiều rộng");
let cDai = +prompt("Mời nhập chiều dài");
let dTich = cRong * cDai;

if( cRong > 0 && !isNaN(cRong) && cDai > 0 && !isNaN(cDai)) {
    alert("Diện tích là: " + dTich +"m2");
}
else{
    alert("Mời bạn nhập lại.");
}