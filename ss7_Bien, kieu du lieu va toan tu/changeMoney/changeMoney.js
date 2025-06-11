function changeMoney() {

    let amount = document.getElementById("Amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let Result;

    if (!isNaN(amount) && amount > 0) {
        if (from === "VN" && to === "USD") {
            Result = "Result: " + (amount / 23000) + "$";
        } else if (from === "USD" && to === "VN") {
            Result = "Result: " + (amount * 23000) + "VND";
        } else {
            Result = "Bạn cần chọn đúng đơn vị";
        }

        document.getElementById("result").innerHTML = Result;
    } else alert("Bạn đã nhập sai giá tiền!");
}