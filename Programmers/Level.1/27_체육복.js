// 27. 체육복
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42862


// 문제 이해
  // n (2 <= n <= 30): 전체 학생 수
  // lost: 체육복 도난당한 학생들의 번호가 담긴 배열
  // reserve: 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열
  // solution: 체육수업을 들을 수 있는 학생의 최댓값을 return

  // lost [2, 4], reserve [1, 3, 5]
  // 경우의 수
    // 1 -> 2 <- 3 : 1, 2, 3 가능
    // 3 -> 4 <- 5 : 3, 4, 5 가능
    // 총 1, 2, 3, 4, 5 가능

  // for: lost 배열의 각 요소를 -1, +1 한 값이 -> reserve 배열에 있는지 확인
  // if: -1, +1 한 값이 reserve 배열에 있다면 answerArray에 +1
  // 이때, reserve의 요소가 lost에도 있다면 해당 요소는 answerArray에 포함하지 않음
  // answerArray에는 reserve 배열의 요소는 무조건 포함 (즉, 무조건 answerArray.length > reserve.length)


// 나의 풀이: 80.0 / 100.0
  function solution(n, lost, reserve) {
  let answer = n - lost.length; // 초기값: 체육복을 잃어버리지 않은 학생 수

  // 체육복이 있는 reserve 학생 확인 (중복 제거)
  reserve = reserve.filter(r => {
    if (lost.includes(r)) {
      answer++; // lost에도 있는 학생은 체육복이 있으므로 카운트 증가
      return false;
    }
    return true;
  });

  // lost 배열 갱신 (reserve에 있는 학생 제거)
  lost = lost.filter(l => !reserve.includes(l));

  // 체육복 빌려주기
  reserve.forEach(r => {
    if (lost.includes(r - 1)) {
      answer++;
      lost = lost.filter(l => l !== r - 1);
    } else if (lost.includes(r + 1)) {
      answer++;
      lost = lost.filter(l => l !== r + 1);
    }
  });

  return answer;
}


// 다른 풀이 1: 93.3 / 100.0
function solution(n, lost, reserve) {
  // 체육복을 도난당했지만 여벌이 있는 학생 제거
  const actualLost = lost.filter(l => !reserve.includes(l));
  const actualReserve = reserve.filter(r => !lost.includes(r));

  // 체육복을 도난당하지 않은 학생의 수로 시작
  let answer = n - actualLost.length;

  // 여벌 체육복이 있는 학생이 도난당한 학생에게 체육복을 빌려줌
  actualReserve.forEach(r => {
    if (actualLost.includes(r - 1)) {
      answer++;
      actualLost.splice(actualLost.indexOf(r - 1), 1);
    } else if (actualLost.includes(r + 1)) {
      answer++;
      actualLost.splice(actualLost.indexOf(r + 1), 1);
    }
  });

  return answer;
}


// 다른 풀이 2: 100.0 / 100.0
function solution(n, lost, reserve) {
  let actualReserve = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b);
  let actualLost = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);

  for (let i = 0; i < actualReserve.length; i++) {
    let front = actualLost.indexOf(actualReserve[i] - 1);
    let back = actualLost.indexOf(actualReserve[i] + 1);

    if (front !== -1) {
      actualLost.splice(front, 1);
    } else if (back !== -1) {
      actualLost.splice(back, 1);
    }
  }

  // 체육복을 빌리지 못한 학생들의 수(actualLost.length)를 전체 학생 수(n)에서 빼서 체육수업을 들을 수 있는 학생의 최대 수를 반환
  return n - actualLost.length;
}

// 다른 풀이 3
function solution(n, lost, reserve) {
  const students = {};
  let answer = 0;

  // 모든 학생들의 체육복 상태를 1로 초기화 (체육복이 있는 상태)
  for (let i = 1; i <= n; i++){
    students[i] = 1;
  }

  // 도난당한 학생들의 체육복 상태를 0으로 변경 (체육복이 없는 상태)
  lost.forEach(number => students[number] -= 1);
  
  // 여벌 체육복을 가져온 학생들의 체육복 상태를 2로 변경 (여벌 체육복이 있는 상태)
  reserve.forEach(number => students[number] += 1);

  // 체육복 빌려주는 과정
  for (let i = 1; i <= n; i++){
    // 현재 학생이 여벌 체육복이 있고, 앞번호 학생이 체육복이 없는 경우
    if (students[i] === 2 && students[i-1] === 0){
      students[i-1]++;
      students[i]--;
    
    // 현재 학생이 여벌 체육복이 있고, 뒷번호 학생이 체육복이 없는 경우
    } else if(students[i] === 2 && students[i+1] === 0){
      students[i+1]++;
      students[i]--;
    }
  }

  // 체육복을 가진 학생 수를 세는 과정
  for (let key in students){
    if (students[key] >= 1){
      answer++;
    }
  }

  return answer;
}


// TIL
// 1. forEach()
  // 각 배열 요소에 대해 제공된 함수를 한 번씩 실행해 주므로, 코드 길이 줄일 때 잘 사용해 보자!

// 2. sort()를 사용해 actualReserve 배열을 정렬하는 이유
  // (1) 순차적 처리
    // 체육복을 빌려줄 수 있는 학생들이 순서대로 처리되어야 한다.
    // 예를 들어, 1번 학생이 2번 학생에게 먼저 체육복을 빌려주면, 3번 학생은 2번 학생에게 체육복을 빌려줄 수 없게 된다.
    // 배열을 정렬하면, 더 낮은 번호의 학생부터 순차적으로 처리할 수 있어, 빌려줄 수 있는 체육복의 분배를 '최적화'할 수 있다.
  // (2) 효율적 탐색
    // 배열이 정렬되어 있으면, 특정 번호의 학생을 찾을 때 더 빠르고 효율적으로 찾을 수 있다.
    // 예를 들어, indexOf 메소드를 사용할 때, 정렬된 배열에서는 찾고자 하는 요소에 더 빠르게 접근할 수 있다.
    // 정렬을 하지 않으면, 알고리즘은 여전히 작동하지만 '최적의 해'를 찾는 데 있어서 비효율적일 수 있다.
    // 예를 들어, 높은 번호의 학생이 먼저 체육복을 빌려주게 되면, 낮은 번호의 학생이 체육복을 받지 못하는 상황이 발생할 수 있다.
    // 따라서, 배열을 정렬함으로써 이러한 문제를 피하고, 더 효율적인 결과를 얻을 수 있다.

// 3. splice() 사용 이유
  // actualLost 배열에서 indexOf를 사용하여 앞번호(front) 또는 뒷번호(back) 학생이 체육복이 필요한지 확인한다.
  // front 또는 back 변수에 -1이 아닌 값이 저장되면, 해당 학생이 체육복을 잃어버린 학생 목록(actualLost)에 존재한다는 것을 의미한다.
  // 즉, splice 메서드는 체육복을 빌려준 학생을 actualLost 배열에서 제거하여, 남은 학생들 중에서 누가 체육복을 필요로 하는지 정확하게 관리하기 위해 사용된다.
  // 이렇게 함으로써, 알고리즘은 최대한 많은 학생이 체육수업을 들을 수 있도록 체육복을 효율적으로 분배한다.