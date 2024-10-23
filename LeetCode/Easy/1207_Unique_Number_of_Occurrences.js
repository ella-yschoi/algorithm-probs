// 1207. Unique Number of Occurrences
// 문제 링크: https://leetcode.com/problems/unique-number-of-occurrences/description/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
// Time Complexity: O(N), Space Complexity: O(N)
const uniqueOccurrences = function(arr) {
  // 1. 각 숫자의 등장 횟수를 기록할 Map 생성
  const countMap = new Map();

  // 2. 배열을 순회하며 각 숫자의 등장 횟수를 카운트
  for (let num of arr) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  // 3. 등장 횟수를 저장할 Set 생성
  const occurrencesSet = new Set();

  // 4. 등장 횟수들을 Set에 추가하여 고유 여부 확인
  for (let count of countMap.values()) {
    if (occurrencesSet.has(count)) {
      return false;  // 중복된 등장 횟수가 있는 경우 false 반환
    }
    occurrencesSet.add(count);
  }

  // 5. 모든 등장 횟수가 고유하면 true 반환
  return true;
};


// Comment
// (countMap.get(num) || 0)는 논리 연산자로 앞이 falsy한 값이면 오른쪽 값을 반환한다.
// 리마인드하자면 JavaScript에서 falsy는 false, undefined, null, 0, NaN, 빈 문자열이다.
// 시간 복잡도는 배열에서 등장 횟수를 확인해 Set에 추가하므로 O(n)이다.
// 공간 복잡도는 등장 횟수를 저장하기 위한 countMap과 횟수의 고유성을 확인하기 위한 occurrencesSet이 필요한데,
// 두 자료구조 모두 배열 크기에 비례하므로 O(N)이다.
// early return을 사용하면 효율성이 더 좋아지는 것일까?
