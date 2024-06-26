/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    if (nums.length < 1 || k == 0) return [];

    var mm = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (mm.get(nums[i])) {
            mm.set(nums[i], mm.get(nums[i]) + 1);
        }
        else {
            mm.set(nums[i], 1);
        }
    }

    let arr = new Array(k);
    let sortedArray = Array.from(mm.entries())
        .sort((a, c) => c[1] - a[1])
        .map(e => e[0]);

    for (let t = 0; t < arr.length; t++) {
        arr[t] = sortedArray[t];
    }

    return arr;
};
