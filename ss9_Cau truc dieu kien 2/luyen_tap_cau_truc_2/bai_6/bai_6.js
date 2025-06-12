let a = prompt("Giải phương trình bậc nhất ax + b = 0, hãy nhập a:");
let b = prompt("hãy nhập b:");
let x = -b/a;
if (!isNaN(a)&&!isNaN(b)) {
    if (a ==0){
        if (b == 0){
            alert("Phương trình vô số nghiệm!");
        } else {
            alert("Phương trình vô nghệm!");
        }
    } else alert("Nghiệm x của phương trình là: " +x);
} else {
    alert("Mời bạn nhập số hợp lệ");
}
