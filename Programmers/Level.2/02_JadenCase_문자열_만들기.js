// 02. JadenCase 문자열 만들기
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12951

// 나의 풀이: map() & charAt() & slice() 사용
function solution(s) {
  return s
      .toLowerCase() // 모든 문자열을 소문자로 변환
      .split(' ') // 공백을 기준으로 단어들을 분리하여 배열 생성
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // 각 단어를 JadenCase로 변환
      .join(' '); // 단어들을 다시 공백으로 연결하여 문자열 생성
}

// 다른 풀이 1: for loop 사용 & index 기준
function solution(s) {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    // 문자열을 반복하면서 각 문자를 처리하는 루프 시작
    if (i === 0 || s[i-1] === " ") {
      // 현재 문자가 첫 번째 문자이거나 이전 문자가 공백인 경우
      answer += s[i].toUpperCase(); // 현재 문자를 대문자로 변환하여 answer에 추가
    } else {
      // 이전 문자가 공백이 아닌 경우
      answer += s[i].toLowerCase(); // 현재 문자를 소문자로 변환하여 answer에 추가
    }
  }
  return answer; // 변환된 문자열 반환
}

// 다른 풀이 2: for loop 사용 & substring 기준
function solution(s) {
  let answer = s.split(" ");
  // 공백을 기준으로 문자열을 분리하여 배열 생성하여 변수 answer에 저장

  for (let i = 0; i<answer.length; i++){
    // answer 배열의 각 요소에 대해 반복하는 루프 시작
      answer[i] = answer[i].substring(0, 1).toUpperCase() + answer[i].substring(1).toLowerCase();
      // 각 요소의 첫 글자를 대문자로 변환하고 나머지 글자를 소문자로 변환하여 요소에 저장
  }

  return answer.join(" ");
  // 변환된 요소들을 공백으로 연결하여 문자열로 반환
}

// TIL
// 문자열의 첫 번째 문자를 가져오는 4가지 방법
  // (1) charAt()로 index의 문자를 가져오기
    var str = 'Hello, World, JavaScript';
    var first = str.charAt(0);
    console.log(first); // H
  // (2) [Index]로 특정 Index의 문자를 가져오기
    var str = 'Hello, World, JavaScript';
    var first = str[0];
    console.log(first); // H
  // (3) slice()로 문자열을 잘라 가져오기
    var str = 'Hello, World, JavaScript';
    var first = str.slice(0, 1);
    console.log(first);   // H
  // (4) substring()로 문자열을 잘라 가져오기
    var str = 'Hello, World, JavaScript';
    var first = str.substring(0, 1); // 첫 번째 글자 추출
    console.log(first); // H