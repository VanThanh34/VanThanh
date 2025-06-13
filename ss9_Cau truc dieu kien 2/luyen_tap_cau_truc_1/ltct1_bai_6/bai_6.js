let amount = +prompt("Nhập số tiền căn hộ", "");

if (amount === 0  || isNaN(amount) ) {
    alert("Số tiền bạn nhập không hợp lệ.");
} else {
    let receiveCommission = amount * 0.03;
    alert("Số tiền hoa hồng nhận được: "+ receiveCommission);
}
