let amount = +prompt("Nhập số tiền căn hộ", "");
let hoaHong = amount * 0.03;

if (amount === 0 || amount === "" || isNaN(amount) ) {
    alert("Số tiền bạn nhập không hợp lê.");
} else {
    alert("Số tiền hoa hồng nhận được: "+ hoaHong);
}
