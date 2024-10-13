// 283. Move Zeroes
// 문제 링크: https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
const moveZeroes = function(nums) {
  // sort()로 정렬하면 TC가 O(n log n)으로 증가해서 X
  // let sortedNums = nums.sort((a, b) => (a - b));

  let index = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[index] = nums[i]; // 비 0요소를 앞쪽으로
      index++; // 다음 비 0요소를 채울 위치로 이동
    }
  }

  for (let i = index; i < nums.length; i++) {
      nums[i] = 0; // 나머지 요소를 0으로
  }
};
