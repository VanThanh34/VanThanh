// let input = prompt("Mời bạn nhập số");
// let number =  parseInt(input);
// if (number >= 1 && number <=7 && !isNaN(number)){
//     if (number === 1){
//         alert("Chủ nhật");
//     } else if (number === 2){
//         alert("Thứ hai");
//     } else if (number === 3){
//         alert("Thứ ba");
//     }else if (number === 4){
//         alert("Thứ tư");
//     }else if (number === 5){
//         alert("Thứ năm");
//     }else if (number ===6){
//         alert("Thứ sáu");
//     }else if (number === 7){
//         alert("Thứ 7");
//     }
// } else alert("Không phải ngày trong tuần")

let input = prompt("Mời bạn nhập số");
let number = parseInt(input);

const daysOfWeek = [
    "nothing",    // Index 0
    "Chủ nhật",   // Index 1 for Chủ nhật
    "Thứ hai",    // Index 2 for Thứ hai
    "Thứ ba",     // Index 3 for Thứ ba
    "Thứ tư",     // Index 4 for Thứ tư
    "Thứ năm",    // Index 5 for Thứ năm
    "Thứ sáu",    // Index 6 for Thứ sáu
    "Thứ 7"       // Index 7 for Thứ 7
];

if (number >= 1 && number <= 7 && !isNaN(number)) {
    alert(daysOfWeek[number]);
} else {
    alert("Không phải ngày trong tuần");
}