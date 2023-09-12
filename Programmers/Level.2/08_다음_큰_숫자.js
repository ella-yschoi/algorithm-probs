// 08. 다음 큰 숫자
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12911

// 나의 풀이
function solution(n) {
  // n을 2진수로 변환하여 1의 갯수를 구함
  const nCount = n.toString(2).split('1').length - 1;

  // n 다음 큰 숫자를 찾기 위해 n+1부터 시작
  let nextNumber = n + 1;

  // 무한 반복
  while (true) {
    // 다음 숫자의 2진수 표현에서 1의 갯수를 구함
    const nextCount = nextNumber.toString(2).split('1').length - 1;

    // n과 다음 숫자의 2진수 표현에서 1의 갯수가 같으면 조건 만족, 다음 숫자를 반환
    if (nCount === nextCount) {
      return nextNumber;
    }

    // 다음 숫자로 이동
    nextNumber++;
  }
}

// 다른 풀이 1
function solution(n) {
  // 특정 숫자의 2진수 표현에서 1의 갯수를 세는 함수 만들어두기
  function countOnes(num) {
    // 숫자를 2진수로 변환하여 1의 갯수를 구함
    return num.toString(2).split('1').length - 1;
  }

  // 인자로 n을 넣어, n의 2진수 표현에서 1의 갯수를 구하기
  const nCount = countOnes(n);

  // n보다 큰 자연수 중, nCount와 같은 값(갯수)을 가지는 숫자 찾기
  let nextNumber = n + 1;
  // 무한 반복
  while (true) {
    if (countOnes(nextNumber) === nCount) {
      return nextNumber;
    }
    // 다음 숫자로 이동
    nextNumber++;
  }
}

// TIL
// (1) 문자열에 특정 문자 n의 개수를 구하려면
// .split('n').length - 1;