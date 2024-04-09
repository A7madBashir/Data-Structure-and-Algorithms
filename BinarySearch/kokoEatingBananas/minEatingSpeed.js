/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    if (piles.length < 1) return 0;

    let min = 1,
    max = Math.max(...piles),
    best = max

    const time = speed => piles.reduce((sum, pile) => sum + Math.ceil(pile/speed), 0);
    while (min <= max) {
        const mid = Math.floor((min + max) / 2)
		
        if (time(mid) <= h) {
            best = mid
            max = mid - 1
        } else
            min = mid + 1
    }

    return best
};

console.log(minEatingSpeed([3, 6, 7, 11], 8)) // 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)) // 30
