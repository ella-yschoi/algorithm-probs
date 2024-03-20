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
    if(citations[i] > i) answer++;
    else break;
  }

  return answer;
}
