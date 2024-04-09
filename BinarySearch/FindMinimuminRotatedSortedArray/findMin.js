/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    if (nums.length <= 0) return 0;

    let min = nums[0];
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        min = Math.min(nums[mid], min);

        if (nums[mid] > nums[end]) {
            start = mid + 1;
        }
        else {
            end = mid - 1
        }
    }
    return min;
};

console.log(findMin([3, 4, 5, 1, 2]))// 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2]))// 1
console.log(findMin([3, 1, 2]))// 1
