let a = Number(prompt("Nhập cạnh a"));
let b = Number(prompt("Nhập cạnh b"));
let c = Number(prompt("Nhập cạnh c"));

//5,3,9
if(a > 0 &&  b > 0 && c >0 && !isNaN(a) &&!isNaN(b) && !isNaN(c)){
    if (a + b > c && b + c > a && a +c >b){
        alert("là 3 cạnh của tam giác");
    } else {
        alert("khồng phải 3 cạnh của tam giác");
    }
}else {
    alert("Mời nhập số hợp lệ");
}

