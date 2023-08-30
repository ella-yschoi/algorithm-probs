// 03. 최솟값 만들기
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12941

// 나의 풀이
function solution (A, B) {
  A.sort((a, b) => a - b); // A 배열 오름차순 정렬
  B.sort((a, b) => b - a); // B 배열 내림차순 정렬
  
  let minSum = 0; // 리턴할 최솟값 선언

  // A 배열의 각 요소와 B 배열의 각 요소를 곱하고 누적합을 구함
  for (let i = 0; i < A.length; i++) {
    minSum += A[i] * B[i];
  }

  return minSum;
}

// 다른 풀이 : reduce() 사용
function solution (A, B) {
  A.sort((a, b) => a - b); // A 배열 오름차순 정렬
  B.sort((a, b) => b - a); // B 배열 내림차순 정렬

  // A 배열의 각 요소와 B 배열의 각 요소를 곱하고 누적합을 구함
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}

// TIL
// sort() 메소드로 숫자 정렬 시 알아둘 것
  // 자바스크립트에서는 sort() 메소드를 사용할 때 기본적으로 요소를 문자열로 변환한 뒤 UTF-16 코드 포인트를 비교하여 정렬한다.
  // 따라서 숫자를 정렬할 때에는 예상치 못한 순서가 나타날 수 있으며, 이러한 문제를 해결하기 위해 sort() 메소드에 비교 함수를 제공해야 한다.
  // 비교 함수는 항상 두 요소를 한 번에 비교하며, 결과에 따라 정렬 순서가 결정된다. 결과가 0보다 작으면 a가 b보다 앞에 오게 되고, 결과가 0보다 크면 b가 a보다 앞에 오게 된다.
  // 아래 예시처럼, 원본 배열 numbers가 정렬되며 sort() 메소드의 리턴 값은 정렬된 원본 배열 numbers를 참조하게 된다.

  const numbers = [15, 52, 23, 11, 9];

  // 오름차순 정렬, 원본 배열 수정
  numbers.sort((a, b) => a - b);
  console.log(numbers); // [9, 11, 15, 23, 52]

  // 내림차순 정렬, 원본 배열 수정
  numbers.sort((a, b) => b - a);
  console.log(numbers); // [52, 23, 15, 11, 9]
