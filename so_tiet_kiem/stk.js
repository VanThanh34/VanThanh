class SoTietKiem {
    constructor(maSo, loaiTietKiem, hoTen, chungMinh, ngayMoSo, soTien) {
        this.maSo = maSo;
        this.loaiTietKiem = loaiTietKiem;
        this.hoTen = hoTen;
        this.chungMinh = chungMinh;
        this.ngayMoSo = ngayMoSo;
        this.soTien = soTien;
    }
}

let danhSachSo = [
    new SoTietKiem("12345", "Ngắn hạn", "Nguyễn Văn A", "123456789", "01/01/2023", 1000000),
    new SoTietKiem("23456", "Dài hạn", "Trần Thị B", "987654321", "02/02/2023", 2000000)
];

function hienThiDanhSach() {
    let html = `
    <table>
      <tr>
        <th>Mã sổ</th>
        <th>Loại tiết kiệm</th>
        <th>Họ tên</th>
        <th>CMND</th>
        <th>Ngày mở sổ</th>
        <th>Số tiền</th>
      </tr>
  `;

    for (let i = 0; i < danhSachSo.length; i++) {
        html += `
      <tr>
        <td>${danhSachSo[i].maSo}</td>
        <td>${danhSachSo[i].loaiTietKiem}</td>
        <td>${danhSachSo[i].hoTen}</td>
        <td>${danhSachSo[i].chungMinh}</td>
        <td>${danhSachSo[i].ngayMoSo}</td>
        <td>${danhSachSo[i].soTien}</td>
      </tr>
    `;
    }

    html += "</table>";
    document.getElementById("bangHienThi").innerHTML = html;
}


function themSoTietKiem() {
    let maSo = document.getElementById("maSo").value.trim();
    let loaiTietKiem = document.getElementById("loaiTietKiem").value.trim();
    let hoTen = document.getElementById("hoTen").value.trim();
    let chungMinh = document.getElementById("chungMinh").value.trim();
    let ngayMoSo = document.getElementById("ngayMoSo").value.trim();
    let soTien = Number(document.getElementById("soTien").value);

    if (!maSo || !loaiTietKiem || !hoTen || !chungMinh || !ngayMoSo || !soTien) {
        alert("Vui lòng điền đầy đủ thông tin.");
        return;
    }

    if (isNaN(soTien) || soTien <= 0) {
        alert("Số tiền phải là số dương.");
        return;
    }

    // kiểm tra trùng mã số
    for (let i = 0; i < danhSachSo.length; i++) {
        if (danhSachSo[i].maSo === maSo) {
            alert("Mã sổ đã tồn tại.");
            return;
        }
    }


    let soMoi = new SoTietKiem(maSo, loaiTietKiem, hoTen, chungMinh, ngayMoSo, soTien);
    danhSachSo.push(soMoi);
    hienThiDanhSach();
}

function xoaSoTietKiem() {
    let maSo = prompt("Nhập mã sổ cần xóa:");
    let index = danhSachSo.findIndex(so => so.maSo === maSo);

    let indexMS = -1;
    for (let i = 0; i < danhSachSo.length; i++) {
        if (danhSachSo[i].maSo === maSo) {
            indexMS = i;
            break;
        }
    }


    let xacNhan = confirm("Bạn có chắc muốn xóa?");
    if (xacNhan) {
        danhSachSo.splice(index, 1);
        hienThiDanhSach();
    }
}

// Khởi tạo lần đầu
hienThiDanhSach();
