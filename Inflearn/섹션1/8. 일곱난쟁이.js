function solution(arr){
  let answer = arr;
  let sum = answer.reduce((a, b) => a + b, 0);
  let flag = 0;
  for(let i = 0; i < 8; i++){
    for(let j = i + 1; j < 9; j++){
      if ((sum-(answer[i] + answer[j])) == 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
        flag = 1;
        break;
      }
    }
    if (flag == 1) break;
  }
  return answer;
}

let arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));