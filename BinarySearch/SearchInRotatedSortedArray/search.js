/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    if (nums.length < 1) return -1;

    let start = 0;
    let end = nums.length - 1;

    if (nums[0] == target) return 0;
    if (nums[target] == target) return target;

    while (start <= end) {
        let mid = parseInt(start + (end - start) / 2);
        console.log(nums[mid])

        if (nums[mid] == target) {
            return mid
        }
        else if (nums[start] == target) {
            return start
        }
        else if (nums[end] == target) {
            return end
        }
        else if (nums[start] < nums[mid] && (target > nums[start] && target < nums[mid])) {
            end = mid - 1;
        }
        else if (nums[start] > nums[mid] &&
            ((target > nums[start] && target > nums[mid])
                || (target < nums[mid] && target < nums[start]))) {
            end = mid - 1;
        }
        else {
            start = mid + 1
        }
    }

    return -1
};

console.log(search([8, 1, 2, 3, 4, 5, 6, 7], 6))// 6
console.log(search([4, 5, 6, 7, 0, 1, 2], 0)) // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 5)) // 1
console.log(search([1, 3], 3)) // 1
console.log(search([3, 1], 1)) // 1
console.log(search([1, 3, 5], 5))// 2
console.log(search([5, 1, 3], 3))// 2
console.log(search([1, 3, 4, 5, 0], 1))// 0

console.log(search([216, 221, 222, 225, 228, 231, 234, 244, 245, 246, 249, 251, 259, 262, 264, 265, 268, 271, 276, 277, 278, 281, 282, 286, 289, 294, 295, 296, 298, 299, 0, 4, 9, 10, 13, 18, 23, 25, 26, 33, 34, 38, 39, 42, 43, 45, 48, 49, 51, 52, 53, 55, 58, 60, 61, 62, 63, 65, 66, 70, 72, 74, 78, 79, 82, 85, 89, 90, 91, 95, 104, 109, 112, 113, 117, 118, 120, 122, 123, 126, 127, 128, 133, 134, 138, 140, 142, 144, 147, 148, 149, 152, 156, 164, 165, 168, 169, 174, 177, 185, 191, 192, 193, 194, 195, 197, 204, 211, 215], 0))// 30


/* 
    /// Cleaner solution

var search = function(nums, target) {
    let low = 0, high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
};

*/