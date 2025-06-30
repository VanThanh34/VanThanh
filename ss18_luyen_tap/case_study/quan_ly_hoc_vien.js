class HocVien {
    constructor(id, name, gender, dob, phone, idcard, level, avatar, attendance = "Có mặt") {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.dob = dob;
        this.phone = phone;
        this.idcard = idcard;
        this.level = level;
        this.avatar = avatar || 'https://via.placeholder.com/50';
        this.attendance = attendance;
    }
}

let danhSach = [];
let indexDangSua = -1;

function themHocVien() {
    let id = +document.getElementById("id").value.trim();
    let name = document.getElementById("name").value.trim();
    let gender = document.getElementById("gender").value;
    let dob = document.getElementById("dob").value;
    let phone = document.getElementById("phone").value.trim();
    let idcard = document.getElementById("idcard").value.trim();
    let level = document.getElementById("level").value.trim();
    let avatar = document.getElementById("avatar").value.trim();

    if (!id || !name || !dob || !phone || !idcard) {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }

    for (let i = 0; i < danhSach.length; i++) {
        if (danhSach[i].id === id) {
            alert("ID đã tồn tại!");
            return;
        }
    }

    let hv = new HocVien(id, name, gender, dob, phone, idcard, level, avatar);
    danhSach.push(hv);
    resetForm();
    hienThiDanhSach();
}


function hienThiDanhSach(ds = danhSach) {
    let tbody = document.getElementById("danhSachHocVien");
    tbody.innerHTML = "";

    ds.forEach((hv, i) => {
        tbody.innerHTML += `
          <tr>
            <td><img src="${hv.avatar}" class="avatar" alt="Ảnh đại diện"></td>
            <td>${hv.id}</td>
            <td>${hv.name}</td>
            <td>${hv.gender}</td>
            <td>${formatNgay(hv.dob)}</td>
            <td>${hv.phone}</td>
            <td>${hv.idcard}</td>
            <td>${hv.level}</td>
            <td>
              <select onchange="capNhatDiemDanh(${i}, this.value)">
                <option value="Có mặt" ${hv.attendance === "Có mặt" ? "selected" : ""}>Có mặt</option>
                <option value="Vắng mặt" ${hv.attendance === "Vắng mặt" ? "selected" : ""}>Vắng mặt</option>
              </select>
            </td>
            <td>
              <button onclick="suaHocVien(${i})">Sửa</button>
              <button onclick="xoaHocVien(${i})">Xoá</button>
            </td>
          </tr>
        `;
    });
}



function capNhatDiemDanh(index, value) {
    danhSach[index].attendance = value;
}

function resetForm() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("gender").value = "Nam";
    document.getElementById("dob").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("idcard").value = "";
    document.getElementById("level").value = "";
    document.getElementById("avatar").value = "";
}

function suaHocVien(index) {
    let hv = danhSach[index];
    document.getElementById("id").value = hv.id;
    document.getElementById("id").disabled = true;
    document.getElementById("name").value = hv.name;
    document.getElementById("gender").value = hv.gender;
    document.getElementById("dob").value = hv.dob;
    document.getElementById("phone").value = hv.phone;
    document.getElementById("idcard").value = hv.idcard;
    document.getElementById("level").value = hv.level;
    document.getElementById("avatar").value = hv.avatar;

    document.getElementById("addBtn").style.display = "none";
    document.getElementById("updateBtn").style.display = "inline";
    indexDangSua = index;
}

function capNhatHocVien() {
    let name = document.getElementById("name").value.trim();
    let gender = document.getElementById("gender").value;
    let dob = document.getElementById("dob").value;
    let phone = document.getElementById("phone").value.trim();
    let idcard = document.getElementById("idcard").value.trim();
    let level = document.getElementById("level").value.trim();
    let avatar = document.getElementById("avatar").value.trim();

    if (!name || !dob || !phone || !idcard) {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }


    let hv = danhSach[indexDangSua];
    hv.name = name;
    hv.gender = gender;
    hv.dob = dob;
    hv.phone = phone;
    hv.idcard = idcard;
    hv.level = level;
    hv.avatar = avatar || 'https://via.placeholder.com/50';

    resetForm();
    hienThiDanhSach();

    document.getElementById("id").disabled = false;
    document.getElementById("addBtn").style.display = "inline";
    document.getElementById("updateBtn").style.display = "none";
    indexDangSua = -1;
}


function timKiemHocVien() {
    let tuKhoa = document.getElementById("search").value.toLowerCase();
    let ketQua = danhSach.filter(hv => hv.name.toLowerCase().includes(tuKhoa));
    hienThiDanhSach(ketQua);
}

function formatNgay(ngayISO) {
    let date = new Date(ngayISO);
    let dd = String(date.getDate()).padStart(2, '0');
    let mm = String(date.getMonth() + 1).padStart(2, '0');
    let yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
}

function xoaHocVien(index) {
    danhSach.splice(index, 1);
    hienThiDanhSach();
}

let bin = new HocVien(13, `Văn Thành`, `Nam`, `2002-04-13`, `0823822567`, `123231233`, `JV101`, "https://user-images.githubusercontent.com/6876788/96633009-d1818000-1318-11eb-9f1d-7f914f4ccb16.gif", `Có mặt`)
let nghiem = new HocVien(11, `Gia Nghiêm`, `Nam`, `1994-07-13`, `123000123`, `123231233`, `JV101`, "https://media.tenor.com/CGD9ne4mYqIAAAAM/nobita-nobita-dance.gif", `Có mặt`)
let nhat = new HocVien(12, `Long Nhật`, `Nam`, `1999-08-13`, `1230012300`, `123231233`, `JV101`, "https://giffiles.alphacoders.com/220/220410.gif", `Vắng mặt`)
danhSach.push(nghiem, nhat, bin);
hienThiDanhSach();
