// 29. 완주하지 못한 선수
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=javascript#

// 나의 풀이
// completion 명단에 has -> if not -> answer
function solution(participant, completion) {
  let map = new Map();
  
  // 참가자 이름 카운트
  for (let name of participant) {
    if (map.has(name)) {
      map.set(name, map.get(name) + 1);
    } else {
      map.set(name, 1);
    }
  }

  // 완주자 이름에 대해 카운트 감소
  for (let name of completion) {
    map.set(name, map.get(name) - 1);
  }

  // 완주하지 못한 선수 찾기
  for (let [name, count] of map) {
    if (count > 0) {
      return name;
    }
  }
}

// 다른 풀이 1
function solution(participant, completion) {
  const map = new Map();

  for(let i = 0; i < participant.length; i++) {
    let a = participant[i], 
        b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  for(let [key, value] of map) {
    if(value > 0) return key;
  }

  return 'nothing';
}

// 다른 풀이 2
const solution = (participant, completion) => {
  participant.sort()
  completion.sort()

  while (participant.length) {
    let loser = participant.pop()
    if (loser !== completion.pop()) return loser;
  }
}
