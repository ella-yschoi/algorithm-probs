// 다른 풀이 1
function solution(s, t){
  let answer=0;
  for(let x of s){
    if(x===t) answer++;
  }
  return answer;
}

let str1="COMPUTERPROGRAMMING";
console.log(solution(str1, 'R'));


// 다른 풀이 2
function solution(s, t){
  let answer=s.split(t).length;
  return answer-1;
}

let str2="COMPUTERPROGRAMMING";
console.log(solution(str2, 'R'));
