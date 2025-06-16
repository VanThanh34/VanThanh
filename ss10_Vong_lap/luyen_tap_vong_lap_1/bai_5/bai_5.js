let a = 0, b = 1;
let sum = 0;
for (let i = 0; i < 20; i++) {
    sum += a;
    let next = a + b;
    a = b;
    b = next;

}console.log(`Tổng là: ${sum}`);
