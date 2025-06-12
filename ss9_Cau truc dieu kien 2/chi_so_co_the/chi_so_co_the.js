let weight = +prompt("Nhập cân nặng của bạn.");
let height = +prompt("Mời nhập chiều cao của bạn.");
let BMI = weight / (height * 2);

if (BMI < 18.5) {
    alert("Underweight");
} else if (BMI >= 18.5 && BMI < 25.0) {
    alert("Normal");
} else if (BMI >= 25.0 && BMI < 30.0) {
    alert("Overweight");
} else {
    alert("Obese");
}
