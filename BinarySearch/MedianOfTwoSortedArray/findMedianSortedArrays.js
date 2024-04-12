/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * FIND MEDIAN NUMBER BY CHECK THE MEDIAN NUM IN FIRST ARRAY AND MEDIAN NUM OF SECOND ONE 
 * BY KEEPING LOWEST ARRAY AS BASED LENGTH OF THE ALGORITHM WE CAN FIND THE MEDIAN NUMBER
 * 
 */
var findMedianSortedArrays = function (nums1, nums2) {
    if (nums1.length > nums2.length)
        [nums1, nums2] = [nums2, nums1];

    const len1 = nums1.length; // lowest length
    const len2 = nums2.length;
    let s = 0;
    let e = len1;

    while (s <= e) {
        var mL = Math.floor((s + e) / 2);
        var mR = Math.floor((len1 + len2 + 1) / 2) - mL;

        const maxL = mL > 0 ? nums1[mL - 1] : Number.NEGATIVE_INFINITY;
        const maxR = mR > 0 ? nums2[mR - 1] : Number.NEGATIVE_INFINITY;
        const max = Math.max(maxL, maxR);

        const minL = mL < len1 ? nums1[mL] : Number.POSITIVE_INFINITY
        const minR = mR < len2 ? nums2[mR] : Number.POSITIVE_INFINITY
        const min = Math.min(minL, minR)

        if (max <= min) {
            if ((len1 + len2) % 2 == 0) {
                return ((max + min) / 2)
            } else {
                return max
            }
        }
        else if (maxL > minR) {
            e = mL - 1
        }
        else {
            s = mL + 1
        }
    }
};

console.log(findMedianSortedArrays([1, 3], [2])) // 2
console.log(findMedianSortedArrays([1, 2, 3, 4, 4, 6, 6], [1, 7])) // 4
console.log(findMedianSortedArrays([1, 2], [3, 4])) // 2.5
console.log(findMedianSortedArrays([2, 3, 5, 7], [1, 4, 6, 8])) // 4.5
console.log(findMedianSortedArrays([0, 0, 0, 0, 0], [-1, 0, 0, 0, 0, 0, 1])) // 0
console.log(findMedianSortedArrays([3, 5, 7, 9, 12, 13], [1, 2, 4, 6, 8, 9, 9, 19])) // 7.5
