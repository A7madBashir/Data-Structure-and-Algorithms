/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (matrix.length < 1) return false;

    let left = 0;
    let right = matrix.length - 1;

    while (left <= right) {
        let mid = parseInt(left + (right - left) / 2);
        if (matrix[mid][0] == target) return true;
        else if (matrix[mid][0] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

        let start = 0;
        let end = matrix[mid].length - 1;

        while (start <= end) {
            let m = parseInt(start + (end - start) / 2);
            if (matrix[mid][m] == target) {
                return true;
            }
            else if (matrix[mid][m] < target) {
                start = m + 1;
            }
            else {
                end = m - 1
            }
        }
    }

    return false;
};

console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], 3)) // true;
console.log(searchMatrix([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 11)) // true;

/*
    * THIS APPROACH IS SUITABLE DURING THE INTERVIEW 
    let m = matrix.length;
    let n = matrix[0].length;
    
    let start=0, end = m*n-1; 
    
    while(start<=end) {    // regular binary search.
        let mid = Math.floor(start + (end-start)/2);
        let row = Math.floor(mid/n);  // row
        let col = mid%n;  // col
        let cell = matrix[row][col];
        if(cell === target) {
            return true;
        } else if(target < cell) {
            end = mid-1;
        } else {
            start = mid+1;
        }
    }
    
    return false;
*/