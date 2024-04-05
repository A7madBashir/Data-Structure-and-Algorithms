/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const n = speed.length;
    const v = [];
    for (let i = 0; i < n; i++) {
        v.push([position[i], speed[i]]);
    }
    v.sort((a, b) => a[0] - b[0]);
    const time = [];
    for (let i = 0; i < n; i++) {
        time.push((target - v[i][0]) / v[i][1]);
    }

    let curr = Number.NEGATIVE_INFINITY;
    let res = 0;

    for (let i = n - 1; i >= 0; i--) {
        if (time[i] > curr) {
            curr = time[i];
            res++;
        }
    }

    return res;
};

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3])); // 3
// const ex2 = carFleet(10, [3], [3]) // 1
// console.log(carFleet(100, [0, 2, 4], [4, 2, 1])) // 1
// console.log(carFleet(10, [0, 4, 2], [2, 1, 3])) // 1
console.log(carFleet(20, [6, 2, 17], [3, 9, 2])) // 2