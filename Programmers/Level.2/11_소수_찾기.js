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

// TIL 1. 소수 판별
  // i * i <= num 조건은 소수를 판별하는 과정에서 성능 최적화를 위해 사용된다.
  // 이는 주어진 숫자 num이 소수인지 판별할 때, num의 제곱근까지만 확인하면 충분하다는 수학적 성질을 이용한 것