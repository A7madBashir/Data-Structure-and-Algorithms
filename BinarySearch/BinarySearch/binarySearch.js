/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (nums.length < 1) return -1;

    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        if (nums[mid] == target) {
            return mid;
        }
        else if (nums[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1
        }
    }

    return -1
};

console.log(search([-1, 0, 3, 5, 9, 12], 9))