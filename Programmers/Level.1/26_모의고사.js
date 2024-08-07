// 26. 모의고사
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42840?language=javascript

// 나의 풀이
function solution(answers) {
  // 정답 배열 answers
  const answer = [];
  
  // 각 수포자들 답변 패턴
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  
  // 각 수포자들 정답 수 계산
  function score(answers, pattern) {
    // 배열 길이까지 반복적으로 순회해서 일치하는 횟수 리턴
    return answers.filter((a, i) => a === pattern[i % pattern.length]).length;
  }
  
  // 각 수포자 점수 계산
  // patterns 배열의 각 패턴에 대해 score 함수를 호출하고, 그 결과를 scores 배열에 저장
  const scores = patterns.map(pattern => score(answers, pattern));
  
  // 최고 점수 계산
  const maxScore = Math.max(...scores);
  
  // 최고 점수 받은 수포자 찾기
  scores.forEach((s, i) => {
    if (s === maxScore) {
      answer.push(i + 1);
    }
  });
  
  return answer;
}

// 다른 풀이 1
// 한 번의 순회로 최고 점수 찾기 및 결과 계산
// 최고 점수를 찾은 후 다시 순회하여 결과를 계산하는 대신, 최고 점수를 찾는 과정에서 동시에 결과를 계산 가능
function solution(answers) {
  // 각 수포자들 답변 패턴
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  // 최고 점수 계산
  let maxScore = 0;
  const result = [];

  // forEach 사용해 각 패턴에 대해 reduce 이용해 점수 계산
  patterns.forEach((pattern, i) => {
    const score = answers.reduce((acc, cur, idx) => 
      acc + (cur === pattern[idx % pattern.length] ? 1 : 0), 0);

    // 현재 수포자의 점수가 최고 점수보다 높으면 최고 점수를 업데이트하고 결과 배열을 초기화한 후 현재 수포자를 추가
    if (score > maxScore) {
      maxScore = score;
      result.length = 0; // 배열 초기화
      result.push(i + 1);

    // 현재 수포자의 점수가 최고 점수와 같으면 현재 수포자를 결과 배열에 추가
    } else if (score === maxScore) {
      result.push(i + 1);
    }
  });

  // 결과 배열 반환
  return result;
}

// 다른 풀이 2
function solution(answers) {
  let answer = [];

  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == man1[i % man1.length]) count[0]++;
    if (answers[i] == man2[i % man2.length]) count[1]++;
    if (answers[i] == man3[i % man3.length]) count[2]++;
  }

  const max = Math.max(count[0], count[1], count[2]);
  for (let i = 0; i < count.length; i++) {
    if (max == count[i]) answer.push(i + 1);
  }

  return answer;
}
