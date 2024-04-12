/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    if (nums.length < 1) return false;

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) return true
        else map.set(nums[i])
    }

    return false;
};

console.log(containsDuplicate([1, 2, 3, 4, 4, 5])); // true

/**
 * optimized solution
 * using Set()
 * by chk set.length and nums.length then we can determine if contains duplicate
 */