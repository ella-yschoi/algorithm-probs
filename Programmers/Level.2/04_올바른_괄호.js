// 04. 올바른 괄호
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12909

// 나의 풀이
function solution(s) {
  let count = 0;
  
  for (let i = 0; i < s.length; i++) {
    // 현재 문자가 여는 괄호일 경우
    if (s[i] === '(') {
      // 여는 괄호의 개수를 증가
      count++;
    } else {
      // 닫는 괄호의 개수를 감소
      count--;
    }
    if (count < 0) {
      // 닫는 괄호가 더 많은 경우, 괄호가 맞지 않으므로 false 반환
      return false;
    }
  }
  // 여는 괄호와 닫는 괄호의 개수가 같은지 확인하여 true 또는 false 반환
  return count === 0;
}

// 다른 풀이 : 효율성은 떨어짐
function solution(s) {
  let count = 0;
  
  // 문자열 s의 각 문자를 paren 변수에 대입하여 순회
  for (let paren of s) {
    // 여는 괄호일 경우 1을 더하고, 닫는 괄호일 경우 1을 뺌
    count += paren === '(' ? 1 : -1;
    if (count < 0) {
      // 중간에 누적 값이 음수가 되면 괄호가 맞지 않으므로 false 반환
      return false;
    }
  }
  // 누적 값이 0이면 올바른 괄호이므로 true 반환, 그렇지 않으면 false 반환
  return count === 0 ? true : false;
}

// TIL
// (1) 이 문제의 포인트
  // 누적 값이 0인 경우, 여는 괄호와 닫는 괄호의 개수가 같은 것을 의미하므로 올바른 괄호(true) 라고 리턴
  // 그렇지 않은 경우, 짝이 맞지 않으므로 false 리턴

// (2) 성립되지 않는 풀이
  if (count > 0) {
    return false;
  }
  // 실제로 괄호가 제대로 짝지어져 있다면 여는 괄호가 먼저 나오고, 닫는 괄호가 나와야 한다.
  // (애초에 닫는 괄호가 먼저 나오는 경우는 올바른 괄호가 아님)
  // 따라서 올바른 괄호 쌍이 형성되기 전에 count가 양수가 될 수 없다.