function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], { index: i, value: nums[i] });
  }

  for (let i = 0; i < nums.length; i++) {
    if (map.get(target - nums[i])) {
      if (i !== map.get(target - nums[i]).index) {
        return [i, map.get(target - nums[i]).index];
      }
    }
  }
  return [];
}

twoSum([3, 2, 4], 6);
