class TicTacToe {
    constructor() {
        this.matrix = [[null, null, null],
                       [null, null, null],
                       [null, null, null]];
        this.player = true;
    }

    getCurrentPlayerSymbol() {
        return this.player ? 'x' : 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if ((this.matrix[rowIndex][columnIndex] == null) && (this.player == true)) {
            this.matrix[rowIndex][columnIndex] = 'x';
            this.player = false;
        }
        else if ((this.matrix[rowIndex][columnIndex] == null) && (this.player == false)) {
            this.matrix[rowIndex][columnIndex] = 'o';
            this.player = true;
        }

        else if (this.matrix[rowIndex][columnIndex] != null) {
            this.player = this.player;
            return this.matrix[rowIndex][columnIndex] = this.matrix[rowIndex][columnIndex];
        }
    }

    isFinished() {
        return Boolean(this.getWinner() || this.noMoreTurns());
    }

    equals(a, b, c) {
        return (a == b && b == c && c == a);
    } 

    getWinner() {
        for (let i = 0; i < 3; i++) {
            if ((this.matrix[i][0] !== null) && this.equals(this.matrix[i][0], this.matrix[i][1], this.matrix[i][2])) return this.matrix[i][0];
        }
        for (let j = 0; j < 3; j++) {
            if ((this.matrix[0][j] !== null) && this.equals(this.matrix[0][j], this.matrix[1][j], this.matrix[2][j])) return this.matrix[0][j];
        }
            if ((this.matrix[0][0] !== null) && this.equals(this.matrix[0][0], this.matrix[1][1], this.matrix[2][2])) return this.matrix[0][0];
            if ((this.matrix[0][2] !== null) && this.equals(this.matrix[0][2], this.matrix[1][1], this.matrix[2][0])) return this.matrix[0][2];
            else return null;
    }

    noMoreTurns() {
        let emptyCell = this.matrix.filter(cell => cell.indexOf(null) != -1);
        if (emptyCell.length == 0) return true;
        else return false;
    }

    isDraw() {
        if (this.noMoreTurns() && (this.getWinner() == null)) return true;
        else return false;
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.matrix[rowIndex][colIndex]) return this.matrix[rowIndex][colIndex];
        else return null;
    }
}

module.exports = TicTacToe;
