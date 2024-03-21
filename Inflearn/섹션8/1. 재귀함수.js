function solution(n){
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(L - 1);
      console.log;
    }
  }
  DFS(n);
}

solution(3); // 1 2 3: 스택에서 pop되어 빠져나오는 순서
