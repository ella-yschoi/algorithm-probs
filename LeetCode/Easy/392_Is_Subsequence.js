// 392. Is Subsequence
// 문제 링크: https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
const isSubsequence1 = function(s, t) {
  let pointerS = 0;
  let pointerT = 0;

  // t를 순회하면서 s의 각 문자가 순서대로 있는지 확인
  while (pointerT < t.length) {
    // s의 현재 문자가 t의 현재 문자와 일치 -> s 포인터 up!
    if (s[pointerS] === t[pointerT]) {
      pointerS++;
    }
    // 아니라면 t 포인터 up!
    pointerT++;

    // s의 모든 문자를 찾았다면
    if (pointerS === s.length) {
      return true;
    }
  }

  // s의 모든 문자를 찾지 못했다면
  return pointerS === s.length;
};


// 다른 풀이 1
const isSubsequence2 = function(s, t) {
  if (s.length > t.length) return false;

  let pointerS = 0;
  let pointerT = 0;

  while (pointerT < t.length) {
    if (s[pointerS] === t[pointerT]) {
      pointerS++;
      if (pointerS === s.length) return true;
    }
    pointerT++;
  }

  return false;
};


// TIL
// s의 길이가 t보다 크면 s는 t의 부분 수열이 될 수 없으므로 즉시 false를 반환할 수 있다.
// 따라서 조건을 빠르게 충족시키지 못하면 조기 종료를 통해 효율을 높이는 것도 방법이다.
// 즉, 반복문이나 함수 내에서 조건을 만족할 때 즉시 종료하여 추가 연산을 피한다.
