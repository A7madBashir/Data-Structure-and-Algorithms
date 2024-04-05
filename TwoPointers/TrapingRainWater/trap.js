/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if (height.length < 1) return [];

    let areas = 0;
    let left = 0;
    let right = height.length - 1;
    let longestRelativeWallIndex = 0;
    let longestRelativeWall = 0;
    for (let i = 0; i < height.length; i++) {
        if (height[i] > height[longestRelativeWallIndex]) {
            longestRelativeWallIndex = i;
        }
    }
    while (left < longestRelativeWallIndex) {
        let area = (height[longestRelativeWall] - height[left]) || 0;
        if (height[longestRelativeWall] < height[left + 1]) {
            longestRelativeWall = left + 1;
        }

        left++;
        areas += area;
    }

    longestRelativeWall = right;
    while(right > longestRelativeWallIndex){
        let area = (Math.abs(height[right] - height[longestRelativeWall])) || 0;
        if (height[longestRelativeWall] < height[right - 1]) {
            longestRelativeWall = right - 1;
        }

        right--;
        areas += area;
    }

    return areas;
};

let example1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]; // 6
let example2 = [4, 2, 0, 3, 2, 5]; // 9
let example3 = [2, 6, 1, 8, 4, 2, 6, 9, 0, 3, 0, 1, 2, 1, 2, 1]; //24
let example4 = [2, 0, 1]; // 1

console.log(trap(example2))

/*
    SOLUTION 2
    
    let maxLeft = 0;
    let maxRight = 0;
    let area =0;
    while(left < right){
        if(height[left] < height[right]){
            maxLeft = Math.max(height[left], maxLeft);
            area += maxLeft - height[left];
            left++;
        }else{
            maxRight = Math.max(height[right], maxRight);
            area += maxRight - height[right];
            right--
        }
    }
*/