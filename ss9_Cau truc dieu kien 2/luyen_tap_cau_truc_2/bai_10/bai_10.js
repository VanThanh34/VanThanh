let fee = +prompt("Mời nhập số kWh đã dùng vào:");

if (fee <= 50) {
    alert("Số tiền điện của bạn là" + (fee *1728) + "VND");
} else if(fee <= 100) {
    alert("Số tiền điện của bạn là" + ((50 *1728) + ((fee-50)*1786)) + "VND");
} else if(fee <= 200) {
    alert("Số tiền điện của bạn là" + ((50 *1728) + (50*1786) +((fee-100)*2074)) + "VND");
}else if(fee <= 300) {
    alert("Số tiền điện của bạn là" + ((50 *1728) + (50*1786) +(100*2074) +((fee-200)*2612)) + "VND");
} else if(fee <= 400) {
    alert("Số tiền điện của bạn là" + ((50 *1728) + (50*1786) +(100*2074) +(100*2612) + ((fee-300)*2919)) + "VND");
} else {
    alert("Số tiền điện của bạn là: " + ((50 *1728) + (50*1786) +(100*2074) +(100*2612) + (100*2919) + ((fee-400)*3015)) + " VND");
}

// toLocaleString(): tính năng thêm dấu phẩy cho tiền dễ nhìn hơn



