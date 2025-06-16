let a = 0, b = 1;

for (let i = 0; i < 20; i++) {
    console.log(`Fibonacci số ${i + 1}: ${a}`);
    let next = a + b;
    a = b;
    b = next;
}
//số Fibonacci là số sau bằng tổng của 2 số trước