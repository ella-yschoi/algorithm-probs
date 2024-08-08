// 12. 소수 찾기
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42839?language=javascript

// 나의 풀이
function solution(numbers) {
  const numSet = new Set(); // 중복을 피하기 위해 Set 사용. 만들어진 숫자 조합을 저장

  // 주어진 숫자 조각들로 만들 수 있는 모든 숫자 조합을 찾는 함수
  const makeCombinations = (arr, str) => {
    if (str.length > 0) {
      numSet.add(parseInt(str)); // 현재 조합된 숫자를 정수로 변환하여 Set에 추가
    }
    for (let i = 0; i < arr.length; i++) {
      const newArr = [...arr]; // 현재 배열 복사
      newArr.splice(i, 1); // 현재 인덱스의 요소를 제거하여 새로운 배열 생성
      makeCombinations(newArr, str + arr[i]); // 재귀 호출로 다음 조합 생성
    }
    // 예를 들어 newArr = [1, 2, 3] 이라면 아래와 같은 과정 반복
    // ([2, 3] ,'1') -> ([3], '12'), -> ([2], '13') -> ...
    // '123'에서 가능한 모든 조합 생성: "123", "132", "213", "231", "312", "321" 등
  };

  // 소수 판별 함수
  const isPrime = (num) => {
    if (num < 2) return false; // 2 미만의 수는 소수가 아님
    for (let i = 2; i * i <= num; i++) {
      if (num % i === 0) return false; // 나누어 떨어지면 소수가 아님
    }
    return true; // 위 조건을 모두 통과하면 소수
  };

  makeCombinations(numbers.split(''), ''); // 빈 문자열로 시작하여 조합 생성
  return Array.from(numSet).filter(isPrime).length; // Set에서 소수를 필터링하여 그 개수 반환
}


// 조금 다른 풀이
function solution(numbers) {
  // numbers: 숫자들이 적힌 문자열 e.g. "17"
  // 문자열의 각 자리 숫자들을 조합하여 가능한 모든 수를 생성하기
  // 종이 조각으로 만들 수 있는 소수 개수 return
  // 배열을 순회하면서 소수인지 파악 -> Math.sqrt()
  
  const numSet = new Set(); // 중복 없이
  
  const makeCombinations = (current, remaining) => {
    if (current.length > 0) {
      numSet.add(parseInt(current));
    }
    for (let i = 0; i < remaining.length; i++) {
      // current에 remaining[i]를 추가하고, remaining의 i번째 문자를 제외한 부분을 전달하여 재귀 호출
      makeCombinations(current + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
    }
  }
  
  // 소수 판별 함수
  const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  // 숫자 조합 생성 시작
  makeCombinations('', numbers);
  
  // 생성된 숫자 중 소수인 개수 세기
  let count = 0;
  numSet.forEach(num => {
    if (isPrime(num)) {
      count++;
    }
  });
  
  return count;
}

// TIL 1. 소수 판별
  // i * i <= num 조건은 소수를 판별하는 과정에서 성능 최적화를 위해 사용된다.
  // 이는 주어진 숫자 num이 소수인지 판별할 때, num의 제곱근까지만 확인하면 충분하다는 수학적 성질을 이용한 것
