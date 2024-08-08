// 14. 전화번호 목록
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42577?language=javascript

// 나의 풀이
function solution(phone_book) {
  // 전화번호부 정렬
  phone_book.sort();
  
  // indexOf() 사용해 인접한 번호끼리 접두어인지 확인
  // 이때, 그냥 length로 하면 인덱스 범위 넘어가므로 length - 1 로 해주어야 함
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].indexOf(phone_book[i]) === 0) {
      return false; // 접두어 있음
    }
  }

  return true; // 접두어 없음
}

// 다른 풀이
function solution(phone_book) {
  // 전화번호부 정렬
  phone_book.sort();

  // startsWith() 사용해 인접한 번호끼리 접두어인지 확인
  for (let i = 0; i < phone_book.length - 1; i++) {
    // 배열이 정렬되어 있다는 가정하에 배열 내에서 인접한 두 번호만 비교하기 때문에 i + 1이 먼저 옴
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false; // 접두어 있음
    }
  }

  return true; // 접두어 없음
}

// TIL
// 문제 시작 시 sort()를 해주는 이유
  // 전화번호 목록을 사전 순으로 정렬하여, 접두어 관계에 있는 전화번호들이 서로 인접하게 배치되도록 하기 위함이다.
  // 이 정렬 과정을 거치면, 전화번호 목록을 순회하면서 바로 다음 번호와만 비교하면 접두어 관계를 쉽게 확인할 수 있다.
  // e.g. 정렬되지 않은 목록 ["12345", "123", "23456"]에서 "123"이 "12345"의 접두어인지 확인하려면, "123"과 목록의 모든 다른 번호를 비교해야 한다.
  // 하지만 목록을 정렬하여 ["123", "12345", "23456"]로 만들면, "123"과 바로 다음 번호인 "12345"만 비교하면 된다.
  // 이렇게 정렬을 사용하면 알고리즘의 효율성을 크게 향상시킬 수 있다.
  // 즉, 각 번호를 한 번씩만 검사하면 되므로, 시간 복잡도가 O(NlogN)으로 감소하며, 이는 전화번호 목록의 길이가 큰 경우 더 중요하다.
  // => 결론: 시간 복잡도 감소를 위해 정렬이 필요하다면 sort() 해주자!