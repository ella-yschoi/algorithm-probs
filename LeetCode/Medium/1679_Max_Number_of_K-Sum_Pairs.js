// 1679. Max Number of K-Sum Pairs
// 문제 링크: https://leetcode.com/problems/max-number-of-k-sum-pairs/description/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
// Time Complexity: O(n) + O(n logn), Space Complexity: O(1)
// nums 배열의 요소로 k: sum을 만들어야 함 -> maximum operation 횟수를 return

const maxOperations = function(nums, k) {
  // 1. 빠르게 확인하기 위해 배열을 오름차순 정렬
  let sortedNums = nums.sort((a, b) => (a - b));

  // 2. 두 포인터를 초기화
  let pointer1 = 0;
  let pointer2 = nums.length - 1;
  let count = 0;

  // 3. 두 포인터가 서로 만날 때까지 반복
  while (pointer1 < pointer2) {
    // 4. 현재 두 포인터의 합 계산
    let sum = nums[pointer1] + nums[pointer2];

    // 5. 합이 k와 같은 경우
    if (sum === k) {
      count++; // 쌍을 찾았으니 count 증가
      pointer1++;
      pointer2--;
    }
    // 6. 합이 k보다 작은 경우
    else if (sum < k) {
      pointer1++;
    }
    // 7. 합이 k보다 큰 경우
    else {
      pointer2--;
    }
  }

  // 8. 최대 카운트 수 반환
  return count;
};


// Comment
// *TC
// O(n log n): 배열을 정렬하는 데 O(n log n)의 시간이 필요
// O(n): 정렬된 배열에서 투 포인터를 사용하여 배열을 한번만 순회

// *SC
// O(1): 추가적인 배열이나 자료구조를 사용하지 않고 상수 개수의 변수(pointer 1/2, count)만 사용
