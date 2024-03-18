// 나의 풀이
function solution(a, b, c){
  let answer = "YES"
  let max = Math.max(a, b, c);

  if (max === c && (a + b) > c) {
    answer = "YES";
  } else {
    answer = "NO";
  }
  
  return answer;
}

console.log(solution(13, 33, 17)); // NO


// 다른 풀이

function solution(a, b, c){
  let answer = "YES", max;
  let total = a + b + c;

  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  if (total - max <= max) answer = "NO";
  
  return answer;
}

console.log(solution(13, 33, 17)); // NO
