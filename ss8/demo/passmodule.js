let input = prompt('Nhập điểm của bạn')

let number = parseFloat(input)
if (number >= 0 && number <= 100 && !isNaN(number)) {
    if (number >= 75){
        alert("Bạn đã pass module!!!");
    }
    else alert("Bạn chưa pass module...");
}
else alert("Nhập số hợp lệ!");
