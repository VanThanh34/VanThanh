let billElectric = +prompt("Mời nhập số kWh đã dùng vào:");

if (billElectric <= 50) {
    alert("Số tiền điện của bạn là" + (billElectric *1728) + "VND");
} else if(billElectric <= 100) {
    alert("Số tiền điện của bạn là" + ((50 *1728) + ((billElectric-50)*1786)) + "VND");
} else if(billElectric <= 200) {
    alert("Số tiền điện của bạn là" + ((50 *1728) + (50*1786) +((billElectric-100)*2074)) + "VND");
}else if(billElectric <= 300) {
    alert("Số tiền điện của bạn là" + ((50 *1728) + (50*1786) +(100*2074) +((billElectric-200)*2612)) + "VND");
} else if(billElectric <= 400) {
    alert("Số tiền điện của bạn là" + ((50 *1728) + (50*1786) +(100*2074) +(100*2612) + ((billElectric-300)*2919)) + "VND");
} else {
    alert("Số tiền điện của bạn là: " + ((50 *1728) + (50*1786) +(100*2074) +(100*2612) + (100*2919) + ((billElectric-400)*3015)) + " VND");
}


// toLocaleString(): tính năng thêm dấu phẩy cho tiền dễ nhìn hơn



