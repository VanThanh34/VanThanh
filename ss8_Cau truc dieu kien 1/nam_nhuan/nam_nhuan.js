let year = +prompt("Nhập số năm: ")

if (year % 4 === 0 && year % 100 !== 0) {
    alert("năm " + year + " là năm nhuận");
} else if (year % 400 === 0 && year % 100 === 0) {
    alert("năm " + year + " là năm nhuận");
} else if (year % 100 === 0 || year % 400 !== 0) {
    alert("năm " + year + " là năm không nhuận")
}

