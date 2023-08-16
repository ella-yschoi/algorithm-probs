// 1. 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수 완성해주세요.

// 나의 풀이
function solution(n) {
    let sum = 0;
    for(let i = 1; i <= n; i++) {
        if (n % i == 0) {
            sum = sum + i
        }
    }
    return sum;
}

// TIL: 약수 찾을 때 포인트
// (1) 반복문 안에서 i는 n보다 작거나 같아야 한다는 조건 필요
// (2) 조건문 안에서 나머지가 0이 되어야 하는 조건 필요