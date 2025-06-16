function inTamGiac() {
    let n = +prompt("Nhập chiều cao tam giác:");
    let viTri = prompt("Nhập vị trí góc vuông (1-dưới trái, 2-trên trái, 3-dưới phải, 4-trên phải):");
    let result = "";


    if (!isNaN(n) && n > 0) {
        switch (viTri) {
            case "1": // Góc vuông dưới trái
                for (let i = 1; i <= n; i++) {
                    result = result + "*".repeat(i) + "\n";
                }
                break;

            case "2": // Góc vuông trên trái
                for (let i = n; i >= 1; i--) {
                    result = result + "*".repeat(i) + "\n";
                }
                break;

            case "3": // Góc vuông dưới phải
                for (let i = 1; i <= n; i++) {
                    result = result + " ".repeat(n - i) + "*".repeat(i) + "\n";
                }
                break;

            case "4": // Góc vuông trên phải
                for (let i = n; i >= 1; i--) {
                    result = result + " ".repeat(n - i) + "*".repeat(i) + "\n";
                }
                break;

            default:
                alert("Vui lòng nhập đúng vị trí từ 1 đến 4.");
                return;
        }

        console.log(result);
    } else {
        alert("Bạn phải nhập số nguyên dương hợp lệ.");
    }
}
