// 10. 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
// 제한사항: n은 1이상, 50000000000000 이하인 양의 정수입니다.

// 나의 풀이: 나머지 활용해 조건문
function solution(n) {
    let answer = 0;
    let sqrtN = Math.sqrt(n);
    
    if (sqrtN % 1 !== 0) {
        answer = -1;
    } else {
        answer = Math.pow(sqrtN+1, 2);
    } 
    return answer;
}

// 다른 풀이: 삼항 연산자 사용
function solution(n) {
    let sqrtN = Math.sqrt(n)
    return sqrtN % 1 === 0 ? Math.pow((sqrtN)+1, 2) : -1
}

// TIL
// (1) Math.sqrt(x): x의 제곱근 값
// (2) Math.pow(x, y): x에 y제곱한 값
// (3) sqrtN % 1 !== 0 으로 나머지를 이용해 소숫점 판별 및 제곱근이 정수가 아닐 경우를 판단할 수 있다.