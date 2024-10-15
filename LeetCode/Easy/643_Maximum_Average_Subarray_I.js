// 643. Maximum Average Subarray I
// 문제 링크: https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
// Time Complexity: O(n), Space Complexity: O(1)
// 길이가 k인 연속된 subarray 중, 평균 값이 최대인 subarray 찾고, 평균 값을 반환
// sliding window: 고정된 크기의 창을 사용해 배열의 특정 부분을 탐색할 때 유용

const findMaxAverage = function(nums, k) {
  // 1. 첫 번째 윈도우의 합 계산
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  // 2. 최대 합 초기화
  let maxSum = windowSum;

  // 3. 윈도우를 오른쪽으로 이동시키면서 합 갱신
  for (let i = k; i < nums.length; i++) {
    // 4. 새로운 윈도우 합 계산
    // 왼쪽 요소를 빼고, 오른쪽 요소를 더함
    windowSum = windowSum - nums[i - k] + nums[i];

    // 5. 최대 합 갱신
    maxSum = Math.max(maxSum, windowSum);
  }
  
  // 6. 최대 합의 평균 값 반환
  return maxSum / k;
};
