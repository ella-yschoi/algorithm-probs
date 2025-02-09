// 1768. Merge Strings Alternately
// 문제 링크: https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75

// My Solution: 배열을 이용한 풀이
// Time Complexity: O(N), Space Complexity: O(N)

// string -> array로 변환
var mergeAlternately = function(word1, word2) {
  let output = [];

  // 두 문자열 중 더 긴 길이를 기준으로 반복 횟수를 정하기
  let maxLength = Math.max(word1.length, word2.length);

  for (let i = 0; i < maxLength; i++) {
      // word1과 word2 번갈아가며 순회해서 맨 앞 문자 떼기
      // 각각 i가 word1과 word2 범위 안에 있을 때만 추가
      if (i < word1.length) output.push(word1[i]);
      if (i < word2.length) output.push(word2[i]);
  }

  return output.join('');
};


// Another Solution 1: 문자열을 직접 조작한 풀이
// Time Complexity: O(N), Space Complexity: O(N)

// 위의 풀이에서는 배열에 결과를 쌓은 후 join으로 문자열을 생성했지만,
// 이 풀이에서는 배열을 사용하지 않고 문자열을 직접 추가하는 방식으로 바꿈
// 즉, 문자열 자체에 직접 접근하여 처리

var mergeAlternately = function(word1, word2) {
  let result = "";
  let i = 0, j = 0;

  // 두 문자열을 번갈아 가며 병합
  while (i < word1.length || j < word2.length) {
    if (i < word1.length) {
      result += word1[i++];
    }
    if (j < word2.length) {
      result += word2[j++];
    }
  }

  return result;
};


// Another Solution 2: slice로 남은 문자 병합
// Time Complexity: O(N), Space Complexity: O(N)

var mergeAlternately = function(word1, word2) {
  let merged = '';
  let i = 0, j = 0;
  
  while (i < word1.length && j < word2.length) {
    merged += word1[i++];
    merged += word2[j++];
  }
  
  // 남은 문자 추가
  merged += word1.slice(i);
  merged += word2.slice(j);
  
  return merged;
}


// Comment
// 두 문자열을 순차적으로 합치는 작업이기에 시간복잡도를 더 줄이기는 어렵지 않을까?
// 문자열 자체에 직접 접근하여 처리한다면 실제로 메모리와 시간이 더 많이 소요될 수 있다.
// JS에서는 문자열이 불변(immutable)하기 떄문에 매번 새로운 문자열을 생성해야 하기 때문이다.
// 따라서 문자열을 직접 수정하기 보다, 배열로 변환해 작업한 후 다시 문자열로 결합하는 방식이 더 좋을 수 있다.
