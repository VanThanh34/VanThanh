let month = document.getElementById("month");
let btn = document.getElementById("btn");

btn.addEventListener("click", onClick);

function onClick() {
    let month2 = +month.value;
    switch (month2) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("answer").innerHTML = ("Tháng " + month2 + " có 31 ngày");
            break;
        case 2:
            document.getElementById("answer").innerHTML = ("Tháng " + month2 + " có 28 hoặc 29 ngày");
            break;
            case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("answer").innerHTML = ("Tháng " + month2 + " có 30 ngày");
        break;
        default:
            document.getElementById("answer").innerHTML = ("Không có tháng nào");
    }
}