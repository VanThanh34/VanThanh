let a = [
    {
        id: "1",
        name: "Nhat"
    },
    {
        id:"2",
        name:"Thanh"
    }
];
// let b = [
//
// ];
// let c = [
//     {
//         id: "3",
//         name:"Nghiem"
//     }
// ];
let d = a.map(function (a){
    if(a.id ==1){
        a.id = "3";
    } return a;
});
console.log(d);

/*
//hàm indexOf lấy vị trí của kí tự trong chuỗi hoặc phần tử trong mảng
let str = "codegym.vn";
let nums = [1,6,4,5,8];
let a = str.indexOf("m");
console.log(a);
*/

