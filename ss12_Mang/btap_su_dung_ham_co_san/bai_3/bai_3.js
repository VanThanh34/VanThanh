let input = prompt("Nhập vào một chuỗi:");
let result = "";

for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (char === char.toUpperCase()) {
        result += char.toLowerCase();
    } else {
        result += char.toUpperCase();
    }
}

document.write("Kết quả: ", result);
