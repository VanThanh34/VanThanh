let btn = document.getElementById("btn");
btn.addEventListener("click", onClick);

function onClick() {
    let max = +prompt("Khoảng số lớn nhất bạn muốn đoán là bao nhiêu?");
    let random = Math.floor(Math.random() * max) + 1;
    let count = 0;
    let guessNum;

    while (count < 3) {
        guessNum = +prompt("Nhập số bạn đoán:");

        if (!isNaN(guessNum)) {
            if (guessNum > random) {
                alert("Số bạn đoán lớn hơn.");
            } else if (guessNum < random) {
                alert("Số bạn đoán bé hơn.");
            } else {
                alert(`Bạn đã đoán đúng số!`);
                document.write(` Bạn đã đoán đúng. Đó là số ${random}!`);
                break;
            }

            count++;
        } else {
            alert("Vui lòng nhập một số hợp lệ!");

        }
    }

    if (guessNum !== random) {
        alert(`Bạn đã hết lượt đoán. Số đúng là ${random}`);
        document.write(`Bạn đã hết lượt đoán. Số đúng là ${random}`);
    }
}