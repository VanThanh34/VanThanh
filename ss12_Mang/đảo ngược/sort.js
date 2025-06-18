let x = [-3, 5, 1, 3, 2, 10];
let first = 0;
let last = x.length -1;
let a;
while (first < last){
    a = x[first];
    x[first] = x[last];
    x[last] = a;
    first ++;
    last--;
} document.write(x);