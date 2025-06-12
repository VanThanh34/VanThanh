/*
let value = prompt("tên cu là gì?")
if (value != ""){
    alert("đại ca "+value)
} else alert("không giỡn!!!")*/

/*
let input = prompt("Số giờ");
let number = parseInt(input);
if (number < 18) {
    greeting = "good day";
} else {
    greeting = "good month";
}
alert(greeting);*/

/*
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}*/

/*let opera = prompt("Mời nhập dấu");
let num1 = 7;
let num2 = 8;

switch (opera) {
    case "+":
        alert("Kết quả là:" + (num1 + num2));
        break;
    case "-":
        alert(`Kết quả là ${num1 - num2} ...`);
        break;
    case "*":
        alert(`Kết quả là ${num1 * num2}`);
        break;
    case "/":
        alert(`Kết quả là ${num1 / num2}`);
        break;
    default:
        alert("Không c phép tính nào.");x

}*/

/*
let curDate = new Date();
let time = curDate.getHours();
if (time < 10) {
    alert("sáng vui vẻ");
} else if (time <20){
    alert("chiều vui vẻ");
} else alert("tối vui vẻ");*/


//phương thức getDay() giúp trả về dữ liệu các ngày trong tuần theo thứ tự 0: CN, 1: Thứ 2, ...
/*
let day = new Date().getDay();
switch (day) {
    case 0:
        alert("CN");
        break;
    case 1:
        alert("Thứ hai");
        break;
    case 2:
        alert("Thứ 3");
        break;
    case 3:
        alert("Thứ 4");
        break;
    case 4:
        alert("Thứ năm");
        break;
    case 5:
        alert("Thứ sáu");
        break;
    case 6:
        alert("Thứ bảy");
        break;
    default:
        alert("Không có ngafy trong tuần");
}*/

//thời gian thực của laptop
/*function displayDate() {
    document.getElementById("demo").innerHTML = Date();*/
// }

//onmouseover, onmouseout, onkeydown, onload phải có addEventListener để thực hiện hành động
/*
let onMouse = document.getElementById("mouse");
    onMouse.addEventListener("mouseover", mouseover);
function mouseover() {
    document.getElementById("mouse").style.color= "blue";
}*/
