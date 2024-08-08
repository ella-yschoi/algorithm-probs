// 16. H-Index
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42747?language=javascript

// 나의 풀이
function solution(citations) {
  citations.sort((a, b) => b - a); // 내림차순 정렬

  let hIndex = 0;
  while (hIndex < citations.length && citations[hIndex] > hIndex) {
    hIndex++;
  }

  return hIndex;
}


// 다른 풀이
function solution(citations) {
  let answer = 0;

  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    // i+1번째 논문의 인용 횟수가 i+1번 이상임
    // i는 0부터 시작하므로 i+1이 실제 순위
    if(citations[i] > i) answer++;
    // 조건을 만족하지 않는 순간, 그 이후의 조건도 모두 만족하지 않을 것이기 때문에 루프를 중단
    else break;
  }

  return answer;
}

// 문제 이해
// 여기서 H-Index는 특정 조건을 만족하는 최대 값을 찾는 지표임
// 정렬을 하지 않은 상태에서 H-Index를 계산하면 논문의 인용 횟수가 크기 순서대로 정렬되지 않음
// 내림차순 정렬하면 가장 많이 인용된 논문부터 순차적으로 조건 확인 가능 (if not: 다 순회 못하고 끝남)

// i=0: citations[0] = 6 > 0 (hIndex = 1)
// i=1: citations[1] = 5 > 1 (hIndex = 2) -> 위의 1이 비교 기준이 됨
// i=2: citations[2] = 3 > 2 (hIndex = 3) -> 위의 2가 비교 기준이 됨
// i=3: citations[3] = 1 <= 3 -> 위의 3이 비교 기준이 됨 (조건 불만족)
// ... 이후 모든 논문도 조건 불만족
