function changeMoney() {

    let Amount = document.getElementById("Amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let Result ;


    if (from === "VN" && to === "USD") {
        Result = "Result: " + (Amount / 23000) + "$";
    }
    else if (from === "USD" && to === "VN") {
        Result = "Result: " + (Amount * 23000) + "VND";
    }
    else if (from === "VN" && to === "VN") {
        Result = "Result: " + Amount + "VND";
    }
    else  {
        Result = "Result: " + Amount + "$";
    }

    document.getElementById("result").innerHTML = Result;
}