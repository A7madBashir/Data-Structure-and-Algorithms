/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    if (height.length < 2) return [];

    if (height.length == 2) {
        return Math.min(height[0], height[1]);
    }

    let output = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        let minValue = Math.min(height[right], height[left]);
        if (minValue * (right - left) > output) {
            output = minValue * (right - left)
        }

        if (height[left] < height[right]) {
            left++
        } else if (height[right] < height[left]) {
            right--;
        } else {
            right--;
            left++
        }
    }

    return output
};

let example1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // 49
let example2 = [1, 8, 3, 7, 7, 9, 10, 6, 2, 4, 1, 5]; // 50
let example3 = [1,0, 2]; // 2
console.log(maxArea(example3))
