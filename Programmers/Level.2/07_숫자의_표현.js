// 07. 숫자의 표현
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12924

// 나의 풀이
function solution(n) {
  // 결과를 저장할 변수
  let answer = 0;
  // 연속된 자연수의 시작값을 나타내는 변수
  let start = 1;
  // 현재까지 합산된 값의 범위를 나타내는 변수
  let sum = 0;

  // 1부터 n까지의 자연수 범위를 순회
  for (let end = 1; end <= n; end++) {
    // 현재까지의 자연수를 합산
    sum += end;

    // 합산된 값이 n보다 크면
    while (sum > n) {
      // 연속된 자연수의 시작값을 증가시키고, 합산된 값을 해당 값만큼 감소
      sum -= start;
      // 다음 범위로 이동
      start++;
    }

    // 합산된 값이 n과 같다면, 연속된 자연수로 n을 표현할 수 있는 경우임
    if (sum === n) {
      // 결과를 1 증가
      answer++;
    }
  }

  return answer;
}

// 다른 풀이 1
function solution(n) {
  let answer = 0;
  
  for (let i = 1; i <= n; i++) {
    let sum = 0;
    // i부터 시작하여 연속된 자연수들의 합을 구함
    for (let j = i; j <= n; j++) {
      sum += j;
      // 합이 n과 같아지면 answer를 1 증가시킴
      if (sum === n) {
        answer++;
        // 이미 합이 n과 같으므로 다음 i로 넘어감
        break;
      }
      // 합이 n보다 크면 더 이상 가능한 경우가 없으므로 반복 중단
      else if (sum > n) {
        break;
      }
    }
  }

  return answer;
}

// 다른 풀이 2
function solution(n) {
  let answer = 0;

  // 1부터 n까지의 모든 자연수를 반복적으로 확인
  for (let i = 1; i <= n; i++) {
    // 주어진 숫자 n을 현재 숫자 i로 나눈 나머지가 0이면서, i가 홀수인 경우
    if ((n % i == 0) && (i % 2 == 1)) {
      // 가능한 표현 방법의 수를 1 증가
      answer++;
    }
  }

  return answer;
}

// TIL