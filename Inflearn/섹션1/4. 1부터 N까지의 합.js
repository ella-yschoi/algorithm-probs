function solution(n){
  let answer = 0;
  let array = [];

  for (let i = 1; i < n; i++) {
    answer = answer + i;
  }

  return answer;
}

console.log(solution(10)); // 45