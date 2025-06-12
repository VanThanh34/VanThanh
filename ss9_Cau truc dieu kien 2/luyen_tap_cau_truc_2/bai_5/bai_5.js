let num1 = +prompt("Nhập chiều dài cạnh a");
let num2 = +prompt("Nhập chiều dài cạnh b");
let dTich = (num1*num2)/2;

if (dTich > 0 && !isNaN(dTich)){
    alert("Diện tích tam giác là: " +dTich +"m2");
} else {
    alert("Mời bạn nhập lại");
}