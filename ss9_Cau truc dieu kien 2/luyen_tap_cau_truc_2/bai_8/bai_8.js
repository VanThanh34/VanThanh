let input = document.getElementById("input");
let btn = document.getElementById("btn");
btn.addEventListener("click", onClick);

function onClick() {
    if (input.value > 0 && input.value < 120) {
        document.getElementById("answer").innerHTML = input.value+" tuổi" + " chính xác là tuổi của một người!";
    } else if(input.value === "") {
        document.getElementById("answer").innerHTML = "Số tuổi không hợp lệ.";
    } else {
        document.getElementById("answer").innerHTML = "Không phải là tuổi của con người!";
    }
}

// input.value === "" &&