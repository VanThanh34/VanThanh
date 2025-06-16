let tienGui =+prompt(`Nhập số tiền gửi`);
let laiSuatMotThang =+prompt(`Nhập lãi suất 1 tháng`);
let soThang =+prompt(`Nhập số tháng gửi`);
let tienLaiThang =0;
for (let i = 1; i <=soThang ; i++) {
    tienLaiThang = tienGui*laiSuatMotThang/100;
    tienGui +=tienLaiThang;
}
console.log(`tổng tiền gưi sau ${soThang} tháng là ${tienGui}`);