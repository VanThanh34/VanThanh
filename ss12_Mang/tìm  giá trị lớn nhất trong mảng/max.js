let arrNum = [-3, 5, 1, 3, 2, 10];
let max = arrNum[0];
let index = 0;
for (let i = 0; i < arrNum.length; i++) {
    if (max < arrNum[i]) {
        max = arrNum[i];
        index = i;
    }
}
document.write(`Giá trị lớn nhất trong mảng là:  ${max} và có vị trí là ${index}`);
