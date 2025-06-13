let a = +prompt("Giải phương trình bậc hai ax2 + bx + c = 0, hãy nhập a:");
let b = +prompt("hãy nhập b:");
let c = +prompt("hãy nhập c:");
let x = -c/b;
let delta = (b*b) - (4*a*c);
let delta2 = (-b+ Math.sqrt(delta))/(2*a);
let delta3 = (-b- Math.sqrt(delta))/(2*a);
if (!isNaN(a)&&!isNaN(b)&&!isNaN(c)) {
   if(a === 0){
       if (b === 0){
           if (c === 0){
               alert("Phương trình vô số nghiệm!");
           } else {
               alert("Phương trình vô nghệm!");
           }
       } else alert("Nghiệm x của phương trình là: " +x);
   }else if(delta<0){
       alert("Phương trình vô nghiệm!")
   }else if(delta === 0){
       alert("Phương trình có 1 nghiệm:" + (-b/(2*a)));
   }else {
       alert("Phương trình có 2 nghiệm là: Nghiệm thứ nhất: " + delta2 +" Nghiệm thứ 2: "+ delta3);
   }
} else {
    alert("Mời bạn nhập số hợp lệ");
}


