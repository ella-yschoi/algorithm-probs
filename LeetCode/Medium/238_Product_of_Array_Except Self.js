// 238. Product of Array Except Self
// 문제 링크: https://leetcode.com/problems/product-of-array-except-self/description/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
const productExceptSelf = function(nums) {
  const n = nums.length;
  const answer = new Array(n).fill(1); // 초기값 1

  // 왼쪽에서 곱 계산
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = leftProduct;
    leftProduct *= nums[i];
  }

  // 오른쪽에서 곱 계산하면서 결과 배열 완성
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return answer;
};


// TIL
// 생각보다 나눗셈 외의 풀이 방법을 떠올리기가 어려웠다.
// 그리고 처음에는 자바스크립트 내장함수 reduce를 썼는데,
// nums의 각 요소마다 reduce를 반복해서 호출하면 O(n^2)의 시간복잡도가 발생한다고 한다.
