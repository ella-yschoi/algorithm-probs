// 12. 카펫
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42842?language=javascript 

// 나의 풀이

// 순서
// 카펫의 전체 격자 수는 갈색 격자 수와 노란색 격자 수의 합
// 카펫의 가로와 세로 길이를 찾기 위해, 가능한 모든 가로와 세로 길이의 조합을 고려
// 각 조합에 대해, 내부에 노란색 격자가 있고 외부에 갈색 격자가 있는지 확인
// 적절한 크기를 찾으면, 그것이 카펫의 가로와 세로 길이

// 규칙
// brown + yellow = 가로 x 세로
// (가로 - 2) * (세로 - 2) = yellow : 가장자리 한 줄을 뺀 나머지 부분이 노란색이기 때문

function solution(brown, yellow) {
  const total = brown + yellow;  // 전체 격자 수

  // e.g. height <= total / 3의 경우,
  // total은 24이므로, total / 3은 8임
  // 따라서 height는 8 이하의 값을 가질 수 있음 (3, 4, 5, 6, 7, 8)

  for (let height = 3; height <= total / 3; height++) {  // 최소 높이는 3
    if (total % height === 0) {  // 높이로 나누어 떨어지는 경우
      const width = total / height;
      if ((width - 2) * (height - 2) === yellow) {  // 노란색 격자 수 확인
        return [width, height];  // 가로, 세로 길이 반환
      }
    }
  }
}

// 리팩토링: 수학적 접근
function solution(brown, yellow) {
  const total = brown + yellow;
  
  // 카펫이 직사각형 형태일 때 (가로 >= 세로), 세로 길이는 면적의 제곱근을 넘을 수 없음
  // e.g. height <= Math.sqrt(total)의 경우,
  // total이 24일 때, Math.sqrt(total)은 대략 4.9 (정확히는 24의 제곱근)
  // 이 조건 하에서 height는 4.9 이하의 정수 값을 가질 수 있으므로, 가능한 height의 값은 3, 4임

  for (let height = 3; height <= Math.sqrt(total); height++) {
    if (total % height === 0) {
      const width = total / height;
      if ((width - 2) * (height - 2) === yellow) {
        return [width, height];
      }
    }
  }
}

// TIL
// 완전탐색 문제를 풀 때는 규칙부터 파악하자!
// 처음부터 내장함수를 쓰기보다, 우선 문제를 풀어낼 수 있는 코드를 쓰고, 그 다음에 리팩토링하기