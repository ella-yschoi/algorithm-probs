// 345. Reverse Vowels of a String
// 문제 링크: https://leetcode.com/problems/reverse-vowels-of-a-string/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
// Time Complexity: O(N), Space Complexity: O(N)
/**
 * @param {string} s
 * @return {string}
 */

// 문자열 s를 배열로 변환
// 배열 s 순회 -> 발견되는 서로 다른 모음이 있다면 서로 바꾸기

const reverseVowels1 = function(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let arrS = s.split('');
  let left = 0;
  let right = arrS.length - 1; // 마지막 요소

  // two pointer 방식으로 모음을 찾아 뒤집기
  while (left < right) {
    // 왼쪽 포인터가 모음이 아니면 이동
    while (left < right && !vowels.has(arrS[left])) {
      left++;
    }
    // 오른쪽 포인터가 모음이 아니면 이동
    while (left < right && !vowels.has(arrS[right])) {
      right--;
    }

    // 두 모음을 교체
    [arrS[left], arrS[right]] = [arrS[right], arrS[left]];
    left++;
    right--;
  }

  return arrS.join('');
};


// 다른 풀이 1
// Time Complexity: O(N), Space Complexity: O(N)
const reverseVowels2 = function(s) {
  const vowels = new Set('aeiouAEIOU'); // 모음 정의를 간소화해 문자열을 바로 Set로 변환
  
  // ... 이하 아래는 같음
};


// TIL
// 처음엔 includes()를 사용하려다 HashMap으로 바꾸니 더 효율적인듯
// 그리고 모음을 배열로 쪼개기보다 바로 문자열을 활용하면 더 빠르고 간단한듯
// Two-Point Algorithm
  // 1차원 배열에서 각자 다른 원소를 가리키고 있는 2개의 포인터를 조작해가면서 원하는 값을 찾을 때 까지 탐색하는 알고리즘이다.
  // 리스트에 순차적으로 접근해야 할 때 두 개의 점(포인트)의 위치를 기록하면서 처리한다.
  // O(N^2) 가 걸리는 문제를 O(N)에 해결할 수 있음
