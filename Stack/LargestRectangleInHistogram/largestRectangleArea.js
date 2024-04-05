/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    if (heights.length < 1) return 0;
    if (heights.length == 1) return heights[0];

    let maxValue = 0;

    for (let i = 0; i < heights.length; i++) {
        let indicator = i;
        let v = 0;
        let c = 0;
        let lowestVal = heights[indicator];

        while (indicator < heights.length) {
            if (heights[indicator] == 0) break;

            // calcuate the value from first element until the current one

            if (lowestVal > heights[indicator]) {
                lowestVal = heights[indicator];
            }

            v = lowestVal * ++c
            if (v > maxValue) maxValue = v;

            indicator++;
        }
    }

    return maxValue;
};

/* Optimzied solution
heights.push(0)  
let stack = [];
let res = 0;
for (let i = 0; i < heights.length; i++) {
	let heightStart = i;
	while (stack.length && stack[stack.length - 1][1] > heights[i]) {
			let [pos, height] = stack.pop();
			res = Math.max(res, (i - pos) * height);
			heightStart = pos; 
		}
	stack.push([heightStart, heights[i]]);
}
return res;

*/

console.log(largestRectangleArea([2,1,5,6,2,3])) // 10
console.log(largestRectangleArea([2,1,2])) // 3