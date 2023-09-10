// 05. 이진 변환 반복하기
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/70129

// 나의 풀이
function solution(s) {
  // [이진 변환 횟수, 제거된 0의 개수]
  let answer = [0, 0];
  
  // 문자열이 '1'이 될 때까지 반복
  while (s !== "1") {
    // 현재 문자열에서 제거된 0의 개수를 세는 변수
    let zeroCount = 0; 
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") {
        zeroCount++;
      }
    }
    // 모든 0 제거
    s = s.split("0").join("");
    
    // 제거된 0의 개수를 더함
    answer[1] += zeroCount;
    
    // 문자열 길이를 2진법으로 변환하여 업데이트
    s = s.length.toString(2);
    
    // 이진 변환 횟수 증가
    answer[0]++;
  }
  
  return answer;
}

// 다른 풀이 1: 정규 표현식 사용
function solution(s) {
  // [이진 변환 횟수, 제거된 0의 개수]
  let answer = [0, 0];

  // 문자열이 '1'이 될 때까지 반복
  while (s.length > 1) {
    // 이진 변환 횟수 증가
    answer[0]++;

    // 문자열에서 '0'의 개수를 세서 제거된 0의 개수를 계산하고 이를 결과 배열에 더함
    answer[1] += (s.match(/0/g) || []).length;

    // 문자열에서 모든 '0'을 정규 표현식을 사용하여 제거하고, 그 길이를 이진법으로 변환하여 다시 s에 할당
    s = s.replace(/0/g, '').length.toString(2);
  }
  
  return answer;
}

// TIL
// replace()
  // (1) 특정 문자를 제거하기
  let str1 = 'ABCABC';
  let replaced_str1 = str1.replace('AB', '');
  console.log(str1); // ABCABC
  console.log(replaced_str1); // CABC
  // 단, 여기서 replace()는 문자열에서 찾은 첫번째 'AB' 문자열만 치환함

  // (2) 특정 문자 모두 제거하기
  let str2 = 'ABCABC';
  let replaced_str2 = str2.replace(/AB/g, '');
  console.log(str2); // ABCABC
  console.log(replaced_str2); // CC
  // 파라미터로 정규식을 전달하여 문자열에 존재하는 모든 'AB' 문자열을 공백으로 변환하여 삭제
  // 'AB' 문자열 앞뒤의 '/'는 정규식의 시작과 끝을 나타내며,
  // 'g' 플래그는 전역 탐색(Global Search), 즉 전체 문자열을 탐색함