/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} index
 * @return {number[][]}
 */

var twoSum = function (numbers, target, index) {
    if (numbers.length < 2) return [];
    if (target > 1000) return [];

    let map = new Map();
    let values = new Map();

    for (let i = 0; i < numbers.length; i++) {
        if (i == index) continue;

        if (map.has(numbers[i])) {
            map.set(numbers[i], map.get(numbers[i]) + 1);
            continue;
        }
        map.set(numbers[i], 1);
    }

    for (let [key, seq] of map) {
        let absTarget = target == 0 ? 0 : target * -1;
        let remainingVal = (absTarget) - (key); // target = remainValue + key
        if (map.has(remainingVal)) {
            // remaining value refer to the key if had more than one value in array
            if (remainingVal == key && seq == 1) continue;

            let v = [target, remainingVal, key]
            values.set(v, v)
        }
    }

    return Array.from(values.values())
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    if (nums.length < 3) return [];

    let validElements = new Map();
    for (let i = 0; i < nums.length; i++) {

        let resTwoSum = twoSum(nums, nums[i], i)
        resTwoSum.forEach(e => {
            validElements.set(e.sort((a, b) => a - b).join(","), e)
        })
    }

    return Array.from(validElements.values());
};

console.log(threeSum([-1, 0, 1, 2, -1, -4, 1, 1, -2, 2, 4, -1, 0]))
// Expected:
// [[-4, 0, 4], [-4, 2, 2], [-2, 0, 2], [-2, 1, 1], [-1, -1, 2], [-1, 0, 1]]
