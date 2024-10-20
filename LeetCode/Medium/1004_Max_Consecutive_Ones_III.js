// 1004. Max Consecutive Ones III
// 문제 링크: https://leetcode.com/problems/max-consecutive-ones-iii/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
// Time Complexity: O(N), Space Complexity: O(1)

// 최대 k개의 0을 뒤집을 수 있다면, 뒤집은 배열에서 연속된 1의 최대 개수를 반환
// 0의 개수가 k 이하가 되도록 조절하며 가장 긴 연속된 1을 찾기

const longestOnes = function(nums, k) {
  let left = 0;
  let zeroCount = 0;
  let maxLength = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > k) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
  }
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};
