function solution(n) {
  let answer = '';

  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2)); // 몫
      answer += String(n % 2); // 나머지
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(11)); // 1011

