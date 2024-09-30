// 334. Increasing Triplet Subsequence
// 문제 링크: https://leetcode.com/problems/increasing-triplet-subsequence/description/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
// smallest라는 변수를 두어 후보를 두고 토너먼트로 비교비교비교
const increasingTriplet = function(nums) {
  // Infinity로 초기화해서 비교할 첫 번째와 두 번째로 작은 값을 설정
  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of nums) {
    // 첫 번째로 작은 수 업데이트
    // num이 smallest보다 작거나 같은 경우
    if (num <= smallest) {
      smallest = num;
    }
    // 두 번째로 작은 수 업데이트
    // num이 smallest보다 크지만 secondSmallest보다는 작은 경우
    else if (num <= secondSmallest) {
      secondSmallest = num;
    }
    else {
      return true;
    }
  }

  return false;
};


// TIL
// 문제에서 주어진 i, j 이런 것보다 smallest 이런 식으로 변수를 명확하게 명명하는게 문제를 푸는 나도,보는 누군가에게도 편할 것 같다.
// 이런 문제의 핵심은 토너먼트식으로 계속 비교하면서 the best option을 찾는 것
