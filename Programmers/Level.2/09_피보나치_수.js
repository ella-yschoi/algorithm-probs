// 09. 피보나치 수
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/12945

// 나의 풀이
function solution(n) {
  // 초기 피보나치 수를 저장할 변수 초기화
  let a = 0;
  let b = 1;
  
  // n이 2 이상이므로, 2부터 n까지 피보나치 수를 계산
  for (let i = 2; i <= n; i++) {
    // a와 b를 더한 값을 1234567로 나눈 나머지를 새로운 a로 업데이트
    const fib = (a + b) % 1234567;
    // a에는 이전 항의 값(b)이 대입되고,
    // b에는 fib값이 대입되어 다음 항을 계산할 수 있도록 갱신됨
    a = b;
    b = fib;
  }
  
  // n번째 피보나치 수를 1234567로 나눈 나머지 반환
  return b;
}

// 다른 풀이
function solution(n) {
  // 초기 피보나치 수열의 첫 두 항을 설정
  const result = [0, 1];

  // 결과 배열의 길이가 n + 1이 될 때까지 반복
  while (result.length !== n + 1) {
    // 현재 피보나치 수열 항을 계산하여 배열에 추가
    const fib = (result[result.length - 2] + result[result.length - 1]) % 1234567;
    result.push(fib);
  }

  // n번째 피보나치 수(n번째 피보나치 수를 1234567로 나눈 나머지)를 반환
  return result[n];
}

// TIL
// 나의 풀이 포인트
  // 초기화된 result 변수를 a와 b로 대체: a는 F(n-2), b는 F(n-1)
  // 반복문의 시작값을 2로 설정하여, n이 2 이상일 때에 대한 계산 시작
  // 각 반복에서 a와 b를 사용하여 F(n)을 계산하고, 중간 계산 결과를 fib에 저장하여 나머지 연산을 진행
  // a를 F(n-2)로, b를 F(n-1)로 업데이트
  // 반복문이 종료된 후, b에는 n번째 피보나치 수가 저장되며, 이를 1234567로 나눈 나머지를 반환