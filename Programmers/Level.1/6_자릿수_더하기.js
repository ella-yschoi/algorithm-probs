// 6. 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.

// 나의 풀이: String()과 Number() 사용
function solution(n) {
    let answer = 0;
    let m = String(n)
    
    for (let i = 0; i < m.length; i++) {
        answer += Number(m[i])
    }
    return answer;
}

// 다른 풀이 1: n+""로 문자열 변환 & split로 하나씩 쪼개기 & reduce() 사용
function solution(n){
    return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
}

// 다른 풀이 2: 물론 parseInt도 사용 가능
