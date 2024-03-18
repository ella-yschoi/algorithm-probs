// 나의 풀이
function solution(a, b, c) {
  // Math.min()은 사용하지 않음
  let answer;

  if (a < b) {
    answer = a;
  } else {
    answer = b;
  }

  if (c < answer) {
    answer = c;
  }

  return answer;
}

console.log(solution(2, 5, 1)); // 1
