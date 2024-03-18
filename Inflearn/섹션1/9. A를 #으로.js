// 다른 풀이 1
function solution(s){
  let answer="";
  for (let x of s){
    if (x == 'A') answer+='#';
    else answer+=x;
  }
  return answer;
}

let str1 = "BANANA";
console.log(solution(str1));

// 다른 풀이 2
function solution(s){
  let answer = s;
  answer = answer.replace(/A/g, "#");
  return answer;
}

let str2 = "BANANA";
console.log(solution(str2));
