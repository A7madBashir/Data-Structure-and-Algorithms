var twoSum = function (nums, target) {
  if (nums.length <= 0) return [];

  if (target <= 0) return [];

  for (let i = 0; i < nums.length; i++) {
    // [i] first element must add to next element until
    // the equation success
    for (let j = i + 1; j < nums.length; j++) {
      if (target == nums[i] + nums[j]) return [i, j];
    }
  }
  return [];
};
