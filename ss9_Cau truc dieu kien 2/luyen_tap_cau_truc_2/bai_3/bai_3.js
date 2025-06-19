let num1 = +prompt("Mời nhập số đo cạnh");
let dTich = num1 * num1;
if (num1 > 0 && !isNaN(num1)) {
    alert("Diện tích của hình vuông là: "+ dTich + "m2");
}
else
{
    alert("Mời bạn nhập lại!")
}
