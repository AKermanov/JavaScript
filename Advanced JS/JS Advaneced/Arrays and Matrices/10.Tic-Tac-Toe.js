function ticTac(movements) {
    function createField(size = 3) {
        let matrix = [];
        for (let row = 0; row < size; row++) {
            let row = []
            for (let col = 0; col < size; col++) {
                row.push("false");
            }
            matrix.push(row);
        }
        return matrix;
    }
    function isFreeSpace(matrix, row, col) {
        if (matrix[row][col] === "false") {
            return true
        } else {
            return false;
        }
    }
    function playerIsWinning(matrix, playerSign) {
        if (checkDiagonals(matrix, playerSign) || checkRows(matrix, playerSign) || checkColumns(matrix, playerSign)) {
            return true
        } else {
            return false;
        }
    }
    function checkDiagonals(matrix, playerSign) {
        let primaryDiagonal = [];
        let secondDiagonal = [];
        for (let index = 0; index < matrix.length; index++) {
            const primDiagSymbol = matrix[index][index];
            const secondDiagSymbol = matrix[index][matrix.length - 1 - index];
            primaryDiagonal.push(primDiagSymbol);
            secondDiagonal.push(secondDiagSymbol);
        }
        let winPrimDiag = isWinning(primaryDiagonal, playerSign);
        let winSecondDiag = isWinning(secondDiagonal, playerSign);
        if (winPrimDiag || winSecondDiag) {
            return true;
        } else {
            return false;
        }

    }
    function checkColumns(matrix, playerSign) {
        for (let col = 0; col < matrix.length; col++) {
            let currentColumn = [];
            for (let row = 0; row < matrix.length; row++) {
                currentColumn.push(matrix[row][col]);
            }
            let isWin = isWinning(currentColumn, playerSign);
            if (isWin) {
                return true;
            }
        }
        return false;
    }
    function checkRows(matrix, playerSign) {
        for (const row of matrix) {
            let isWin = isWinning(row, playerSign);
            if (isWin) {
                return true;
            }
        }
        return false;
    }
    function isWinning(array, playerSign) {
        return array.every(element => element === playerSign);
    }
    let field = createField();
    let playerMove = 0;
    let somebodyWin = false;
    let winner;
    let freeSpaces = field.length * field.length;
    for (const movement of movements) {
        let XorY = (playerMove % 2 === 0) ? "X" : "O";
        let [rowPlayer, colPlayer] = movement.split(" ").map(Number);
        if ((freeSpaces > 0) && !(isFreeSpace(field, rowPlayer, colPlayer))) {
            console.log("This place is already taken. Please choose another!");
        } else if (freeSpaces === 0) {
            break;
        } else {
            field[rowPlayer][colPlayer] = XorY;
            freeSpaces--;
            if (playerIsWinning(field, XorY)) {
                somebodyWin = true;
                winner = XorY;
                break;
            }
            playerMove++;
        }
    }
    if (!somebodyWin) {
        console.log("The game ended! Nobody wins :(");
    } else {
        console.log(`Player ${winner} wins!`);
    }
    field.forEach(row => console.log(row.join("\t")));
}
