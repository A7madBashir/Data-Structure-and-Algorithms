/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    if (numbers.length < 2) return [];
    if (target > 1000) return [];

    let map = new Map();
    let targetVal = [];

    for (let i = 0; i < numbers.length; i++) {
        // # value exist than one more time
        if (map.has(numbers[i])) {
            let v = map.get(numbers[i])[0];
            map.set(numbers[i], [v, i + 1]);
            continue;
        }
        map.set(numbers[i], [i + 1]);
    }

    for (let [key, value] of map) {
        let remainingVal = target - key;
        if (map.has(remainingVal)) {
            // # check if map value of two elements or one
            targetVal.push(value[0]);

            if (map.get(remainingVal).length == 2)
                targetVal.push(map.get(remainingVal)[1])
            else
                targetVal.push(map.get(remainingVal)[0])
            
            break
        }
    }

    return targetVal
};

console.log(twoSum([2, 3, 3, 0, 0, 2], 6))