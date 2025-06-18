let word;
let engLish = ["hi", "hello", "hungry", "starving", "full", "thirsty"];
let vietNamese = ["chào", "xin chào", "đói bụng", "đói quá", "no bụng", "khát nước"];
let found = false;

function search() {
    word = document.getElementById("ask").value;
    if (word !== "") {
        for (let i = 0; i < engLish.length; i++) {
            if (word === engLish[i]) {
                engLish[i] = vietNamese[i];
                document.getElementById("answer").innerHTML = (`${engLish[i]}`);
                found = true;
                break;
            }
        }
        if (!found) {
            document.getElementById("answer").innerHTML = (`Không tìm thấy`);
        }
    } else {
        document.getElementById("answer").innerHTML = (`Mời bạn nhập lại`);
    }
}