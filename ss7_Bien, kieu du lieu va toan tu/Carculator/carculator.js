function do_Add(){
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    let Result;

    Result = a + b;
    document.getElementById('Ketqua').innerHTML = Result;
}
function do_Sub(){
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    let Result;

    Result = a - b;
    document.getElementById('Ketqua').innerHTML = Result;
}
function do_Mul(){
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    let Result;

    Result = a * b;
    document.getElementById('Ketqua').innerHTML = Result;
}
function do_Div(){
    let a = parseInt(document.getElementById('num1').value);
    let b = parseInt(document.getElementById('num2').value);
    let Result;

    Result = a / b;
    document.getElementById('Ketqua').innerHTML = Result;
}