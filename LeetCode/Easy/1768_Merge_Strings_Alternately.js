// 1768. Merge Strings Alternately
// 문제 링크: https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
// ⏳ Time Complexity: O(N), Space Complexity: O(N)
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

// 풀이 방법
  // string -> array로 변환
  // 각 array를 순회하여 단어 하나씩 꺼내기
  // 새로운 array에 하나씩 번갈아 가면서 넣기
  // if word2가 word1 보다 길면 -> word2의 나머지 부분을 맨 뒤에 붙임
  // 새 array를 다시 string으로 변환해 return

const mergeAlternately1 = function(word1, word2) {
  const arr1 = word1.split('');
  const arr2 = word2.split('');
  const maxLength = Math.max(arr1.length, arr2.length);
  let result = [];

  for (let i = 0; i < maxLength; i++) {
    if (i < arr1.length) {
      result.push(arr1[i]);
    }
    if (i < arr2.length) {
      result.push(arr2[i]);
    }
  }

  return result.join('');
};


// 다른 풀이 1
// ⏳ Time Complexity: O(N), Space Complexity: O(N)

// 풀이 방법
  // 위의 풀이에서는 배열에 결과를 쌓은 후 join으로 문자열을 생성했지만,
  // 이 풀이에서는 문자열을 직접 추가하는 방식으로 바꿈
  // 즉, 문자열 자체에 직접 접근하여 처리
const mergeAlternately2 = function(word1, word2) {
  let result = "";
  let i = 0;
  let j = 0;
  let len1 = word1.length;
  let len2 = word2.length;

  // 두 문자열을 번갈아 가며 병합
  while (i < len1 || j < len2) {
    if (i < len1) {
      result += word1[i++];
    }
    if (j < len2) {
      result += word2[j++];
    }
  }

  return result;
};


// TIL
// 두 문자열을 순차적으로 합치는 작업이기에 시간복잡도를 더 줄이기는 어렵지 않을까?
// 두 번째 풀이 방법은 첫 번째 풀이 방법에 비해 문자열을 배열로 변환하는 과정이 생략되었고
// 문자열 자체에 직접 접근하여 처리하기 때문에 추가적인 메모리와 시간이 덜 들 것 같다.
