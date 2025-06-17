let a = 0, b = 1;
let sum = 0;
let next;
for (let i = 0; i < 20; i++) {
    sum += a;
    next = a + b;
    a = b;
    b = next;

}console.log(`Tổng là: ${sum}`);
