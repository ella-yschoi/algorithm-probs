function solution(n) {
  let answer = "";

  function DFS(v) {
    if (v > 7) return;
    else {
      answer += (v + ' '); // 전위 순회 1 2 4 5 3 6 7 
      DFS(v * 2); // 왼쪽 자식
      // answer += (v + ' '); // 중위 순회 4 2 5 1 6 3 7
      DFS(v * 2 + 1); // 오른쪽 자식
      // answer += (v + ' '); // 후위 순회 4 5 2 6 7 3 1 
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(1));
