const table = document.getElementById("table"); // tìm cái bảng trong HTML

// Dòng: từ 1 đến 10 (tức là 10 dòng)
for (let i = 1; i <= 10; i++) {
    let row = "<tr>"; // bắt đầu 1 dòng mới

    // Cột: từ 2 đến 9 (8 cột)
    for (let j = 2; j <= 9; j++) {
        row += `<td style="border: 1px solid black; padding: 5px;">${j} x ${i} = ${j * i}</td>`;
    }

    row += "</tr>"; // kết thúc dòng
    table.innerHTML += row; // thêm dòng vào bảng
}      