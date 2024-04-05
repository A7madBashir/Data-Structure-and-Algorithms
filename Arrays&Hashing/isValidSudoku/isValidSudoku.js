/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    if (board.length !== 9) return false;

    const rows = []
    const cols = []
    const boxes = []

    for (let i = 0; i < 9; i++) {
        rows[i] = new Map()
        cols[i] = new Map()
        boxes[i] = new Map()
    }

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            let v = board[r][c];
            if (v == ".") continue;

            if (rows[r].has(v) || cols[c].has(v) ||
                boxes[Math.floor(r / 3) * 3 + Math.floor(c / 3)].has(v)) return false;

            rows[r].set(v)
            cols[c].set(v)
            boxes[Math.floor(r / 3) * 3 + Math.floor(c / 3)].set(v)
        }
    }

    return true;
};

let arr = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

console.log(isValidSudoku(arr))
