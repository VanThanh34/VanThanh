let num1 = +prompt("Nhập chiều dài cạnh a");
let num2 = +prompt("Nhập chiều dài cạnh b");
let dTich = (num1*num2)/2;

if (num1 > 0 && !isNaN(num1) && num2 > 0 && !isNaN(num2)){
    alert("Diện tích tam giác là: " +dTich +"m2");
} else {
    alert("Mời bạn nhập lại");
}