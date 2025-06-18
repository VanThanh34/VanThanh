let board = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]];
let isOnePlayer = true;

displayBoard();

function play(i, j) {
    if (board[i][j] === "") {
        if (isOnePlayer) {
            board[i][j] = "X";
            isOnePlayer = false;
        } else {
            board[i][j] = "O";
            isOnePlayer = true;
        }

        document.body.innerHTML = "";
        displayBoard();
    }
}

function displayBoard() {
    let temp = "<table style=' border: 1px solid; border-collapse: collapse'  >"
    for (let i = 0; i < board.length; i++) {
        temp += "<tr>";
        for (let j = 0; j < board[i].length; j++) {
            temp += `<td style="border: 1px solid; text-align: center" width="50px" height="50px" onclick="play(${i}, ${j})">${board[i][j]}</td>`
        }
        temp += "</tr>";
    }
    temp += "</table>"
    document.writeln(`<h2>Cờ Caro</h2> ${temp}`);
}