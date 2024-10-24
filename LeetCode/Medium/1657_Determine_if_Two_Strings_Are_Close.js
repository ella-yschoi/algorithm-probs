// 1657. Determine if Two Strings Are Close
// 문제 링크: https://leetcode.com/problems/determine-if-two-strings-are-close/description/?envType=study-plan-v2&envId=leetcode-75

// word1과 word2가 동일한 문자 집합을 가지는지 -> Set
// word1과 word2가 각 문자의 등장 횟수 같은지 -> Map

// 나의 풀이
// Time Complexity: O(N), Space Complexity: O(N)

const closeStrings = function(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }

  const set1 = new Set(word1);
  const set2 = new Set(word2);

  if (!compareSets(set1, set2)) {
    return false;
  }

  const freq1 = getFrequencyMap(word1);
  const freq2 = getFrequencyMap(word2);

  const freq1Values = [...freq1.values()].sort((a, b) => (a - b));
  const freq2Values = [...freq2.values()].sort((a, b) => (a - b));

  return compareArrays(freq1Values, freq2Values);
};

// 두 Set 비교
function compareSets(set1, set2) {
  if (set1.size !== set2.size) return false;
  for (let value of set1) {
    if (!set2.has(value)) {
      return false;
    }
  }

  return true;
}

// 문자 빈도를 Map으로 저장
function getFrequencyMap(word) {
  const freqMap = new Map();
  for (let char of word) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  return freqMap;
}

// 두 배열을 비교
function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}


// Comment
// 처음에 문제 이해 자체가 어려웠지만, 조건을 단계적으로 맞춰나가는게 재밌었던 문제
// 두 문자열의 길이가 n일 때, 각 문자열을 Set으로 변환하고 비교하는 시간 복잡도는 O(n)이다.
// 그리고 Map을 사용해 각 문자열의 문자 빈도를 계산하는 데에도 O(n)의 시간이 소요된다.
// 하지만 빈도 배열을 정렬할 때는 O(N)보다 더 비용이 들지 않나? (찾아보니 정렬 과정은 단순히 배열을 한 번 순회하는 것이 아니라,
// 요소들을 비교하고 위치를 바꾸는 작업을 반복적으로 수행해야 하며, 그 과정이 트리 구조처럼 여러 단계로 나뉘기 때문이라고 한다.)
// 그리고 공간 복잡도는 Set, Map, 빈도 배열을 저장하기 위한 공간이 필요하므로 O(N)이다.
