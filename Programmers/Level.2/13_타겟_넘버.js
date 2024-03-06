// 13. 타겟 넘버
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/43165?language=javascript

// 나의 풀이: 재귀함수 사용
// 문제 이해
  // numbers: 사용할 수 있는 숫자가 담긴 배열
  // target: 타겟 넘버
  // numbers 안의 숫자들을 순서를 바꾸지 않고 서로 더하고 빼서 target 만들기

  // for문으로 numbers 배열의 모든 요소 탐색
  // 돌 때마다 각각 요소들을 더하기
  // if, target과 일치하면 반복을 멈춤
  // ㄴ 위의 과정을 재귀함수로 정의 (매개변수: 현재 index와 현재까지의 합)
  // ㄴ 결국, 위 함수는 배열의 모든 요소를 순회해 각 요소를 더하거나 뺀 경우를 재귀적으로 호출

function solution(numbers, target) {
  let count = 0;

  function calculateSum(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        count++;
      }
      return;
    }

    calculateSum(index + 1, sum + numbers[index]); // 현재 요소를 더하는 경우
    calculateSum(index + 1, sum - numbers[index]); // 현재 요소를 빼는 경우
  }

  calculateSum(0, 0); // 초기 인덱스와 합은 0으로 시작
  return count;
}


// 다른 풀이 : Dynamic Programming 적용해 중복 계산 줄이고 효율적으로
function solution(numbers, target) {
  // 초기 dp 맵 생성, 초기 합계 0에 대한 방법 수는 1
  let dp = new Map([[0, 1]]);

  // numbers 배열의 각 요소에 대해 반복
  for (let number of numbers) {
    let next = new Map();

    // 현재 dp에 저장된 모든 합계에 해당 숫자를 더하거나 빼서 새로운 합계를 만들기
    for (let [sum, count] of dp) {
      let add = sum + number;
      let subtract = sum - number;

      // 단락 평가(short-circuit evaluation)로 기본값 설정
      // 만약 add 키가 next Map에 존재하지 않는 경우, next.get(add)는 undefined를 반환
      // 만약 undefined 반환한다면, 대신 0을 사용
      next.set(add, (next.get(add) || 0) + count);
      next.set(subtract, (next.get(subtract) || 0) + count);
    }

    dp = next;
  }

  return dp.get(target) || 0;
}


// TIL
// Map
  // JavaScript에서 제공하는 키-값 쌍을 저장하기 위한 콜렉션
  // 일반 JavaScript 객체(Object)와 유사하지만, 반복 가능 여부와 성능 등에서 차이가 있음
// 다이나믹 프로그래밍 접근
  // 각 단계에서 가능한 모든 중간 합계의 수를 계산하고 이를 기반으로 다음 단계의 계산을 진행한다.
  // 이를 통해 최종적으로 타겟 넘버를 만드는 방법의 수를 찾는다.
  // 즉, 중간에서 다 계산한 후에 최종적으로 결과 값 리턴하면 효율적임.