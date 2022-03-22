var twoSum = function (nums, target) {
  let dic = {};

  for (let i = 0; i < nums.length; i++) {
    let num = target - nums[i];
    if (dic[nums[i]] || dic[nums[i]] === 0) return [dic[nums[i]], i];
    dic[num] = i;
  }
  return;
};

console.log(twoSum([0, 4, 3, 0], 0));
console.log(twoSum([2, 7, 11, 15], 9));
