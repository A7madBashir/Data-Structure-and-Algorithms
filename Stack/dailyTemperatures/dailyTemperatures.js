/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    if (temperatures.length < 1) return [0];
    const res = [], stack = []
    const t = temperatures
    for (let i = 0; i < t.length; i++) {
        if (t[stack.at(-1)] >= t[i]) {
            res[stack.at(-1)] = 0
        }
        while (t[stack.at(-1)] < t[i]) {
            let d = stack.pop()
            res[d] = i - d;
        }
        stack.push(i)
    }
    res.push(0)

    return res
};


let temperatures = [73, 74, 75, 71, 69, 72, 76, 73]  // [1,1,4,2,1,1,0,0]
let temperatures2 = [64, 40, 49, 73, 72, 35, 68, 83, 35, 73, 84, 88, 96, 43, 74, 63, 41, 95, 48, 46, 89, 72, 34, 85, 72, 59, 87, 49, 30, 32, 47, 34, 74, 58, 31, 75, 73, 88, 64, 92, 83, 64, 100, 99, 81, 41, 48, 83, 96, 92, 82, 32, 35, 68, 68, 92, 73, 92, 52, 33, 44, 38, 47, 88, 71, 50, 57, 95, 33, 65, 94, 44, 47, 79, 41, 74, 50, 67, 97, 31, 68, 50, 37, 70, 77, 55, 48, 30, 77, 100, 31, 100, 69, 60, 47, 95, 68, 47, 33, 64];

console.log(dailyTemperatures(temperatures2));

/* old solution

var dailyTemperatures = function (temperatures) {
    if (temperatures.length < 1) return [0];

    let result = [];
    let map = new Map();
    for (let i = 0; i < temperatures.length; i++) {
        let value = temperatures[i];
        if (!map.has(value)) {
            map.set(value, [i])
        } else if (value == 100) {
            let v = map.get(value)
            map.set(value, [...v, i])
        }
    }

    for (let i = 0; i < temperatures.length; i++) {
        let comparer = temperatures[i];

        if (comparer == 100) result.push(0)
        else if (comparer == 99 && map.has(100)) {
            let indexes = map.get(100);
            for (let c = 0; c < indexes.length; c++) {
                if (i < indexes[c]) {
                    result.push(indexes[c] - i)
                    break;
                }
            }
        }
        else
            for (let j = i + 1; j < temperatures.length; j++) {
                if (comparer < temperatures[j]) {
                    result.push(j - i);
                    break;
                }
            }

        // if no element exist for previous loop then append zero
        if (result.length < i + 1) {
            result.push(0)
        }
    }

    return result
};

*/