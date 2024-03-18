// 다른 풀이 1
function solution(s){
  let answer="YES";
  s=s.toLowerCase();
  let len=s.length;
  for(let i=0; i<Math.floor(len/2); i++){
    if(s[i]!=s[len-i-1]) return "NO";
  }
  return answer;
}

let str1="goooG";
console.log(solution(str1));


// 다른 풀이 2
function solution(s){
  let answer="YES";
  s=s.toLowerCase();
  if(s.split('').reverse().join('')!=s) return "NO";    
  return answer;
}

let str2="gooG";
console.log(solution(str2));
