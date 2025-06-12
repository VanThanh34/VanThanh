let input = document.getElementById("answer");
input.addEventListener("change", onChange);

function onChange() {
    if (input.value === "ECMAScript") {
        alert("Right");
    } else {
        alert("Didn't know? ECMAScript!");
    }
}
