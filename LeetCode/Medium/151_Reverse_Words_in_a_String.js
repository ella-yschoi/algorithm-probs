// 151. Reverse Words in a String
// 문제 링크: https://leetcode.com/problems/reverse-words-in-a-string/description/?envType=study-plan-v2&envId=leetcode-75

// 풀이 방법
// 공백이 두 개 이상이면 하나로 만들기
// 모든 공백이 하나임을 확인하면 -> 공백을 기준으로 단어 순서 reverse()


// 나의 풀이: 문자열을 두 번 순회해야하므로 비효율적인 풀이 (그래도 45ms)
// Time Complexity: O(N), Space Complexity: O(N)
const reverseWords1 = function(s) {
  let arrS = s.split(' ');
  let filteredArrS = arrS.filter(word => word !== '');

  return filteredArrS.reverse().join(' ');
};


// 다른 풀이 1: 문자열 한 번만 순회하는 풀이 (60ms)
// Time Complexity: O(N), Space Complexity: O(N)
const reverseWord2 = function(s) {
  let result = '';
  let word = '';
  
  // 문자열을 끝에서부터 순회
  for (let i = s.length - 1; i >= 0; i--) {
    // 문자가 공백이 아닌 경우, 현재 문자를 단어에 추가
    if (s[i] !== ' ') {
      word = s[i] + word;
    } 
    // 문자가 공백이고, 단어가 있으면 결과에 추가
    else if (word !== '') {
      if (result !== '') result += ' ';
      result += word;
      word = '';  // 단어 초기화
    }
  }
  
  // 마지막으로 단어가 남아있는 경우 처리
  if (word !== '') {
    if (result !== '') result += ' ';
    result += word;
  }
  
  return result;
};


// 다른 풀이 2: 정규표현식을 활용한 풀이 (49ms)
// Time Complexity: O(N), Space Complexity: O(N)
const reverseWords3 = function(s) {
  // 문자열을 공백으로 나누되, 연속된 공백은 무시하고, 앞뒤 공백도 제거
  return s.trim().split(/\s+/).reverse().join(' ');
};

// TIL
// 이번 문제는 필요한 내장함수를 적절히 섞어가면서 + 최대한 효율적인 풀이를 만들어가는 게 포인트였던 것 같다.
// 흠, 그런데 정규표현식을 활용한 알고리즘 풀이가 꼭 좋은걸까?
