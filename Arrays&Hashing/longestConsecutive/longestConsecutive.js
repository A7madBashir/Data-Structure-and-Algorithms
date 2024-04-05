/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length <= 0) return [];

    // nums = nums.sort((a, b) => a - b)

    let arrItems = new Map();
    let longestVal = 1;
    // let sortedItems = [];
    // let counter = 1;

    for (let i = 0; i < nums.length; i++) {
        // ! Sorting one of O(N LOG N) complexity
        /*
             let temp = i + 1
             if (nums[i] + 1 == nums[temp]) {
                 counter++;
             }
             else if (nums[i] + 1 > nums[temp]) continue
             else if (longestVal < counter) {
                 longestVal = counter
                 counter = 1
             }
        */
        arrItems.set(nums[i]);
    }

    for (let key of arrItems.keys()) {
        if (!arrItems.has(key - 1)) {
            let y = key + 1;
            let counter = 1;
            while (arrItems.has(y)) {
                y++;
                longestVal = Math.max(longestVal, ++counter)
            }
        }
    }

    return longestVal
};

let arr = [0, 3, 7, 2, 5, 8, 4, 6, 0, 5, 9, 24, 79, 45, 1, 2, 3, 4, 5, 6,10, 7, 8, 9, 0, 0, 1, 2, 3, 4, 5, 1]
console.log(longestConsecutive(arr))
