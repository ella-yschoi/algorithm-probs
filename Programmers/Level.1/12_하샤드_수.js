// 12. 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

// 나의 풀이: 형 변환 O
function solution(x) {
    let sum = 0;
    let newX = String(x).split("");
    
    for (let i = 0; i < newX.length; i++) {
        sum += Number(newX[i])
    }
    
    return (x % sum === 0) ? true : false;
}

// 다른 풀이: 형 변환 X
function solution(x) {
    let sum = x;
    let num = x;
    do {
        sum += x % 10; // x를 10으로 나눈 나머지 값을 sum에 누적
        x = Math.floor(x / 10); // 내림해서 정수로 만들기
    } while (x > 0); // do ... while문으로 x가 0보다 클 때까지 실행

    return !(num % sum); // 0이 아니면 true
}

// TIL
// (1) 형 변환을 하지 않으면 속도가 더 올라갈 수 있다.
// (2) 어떤 수를 10으로 계속 나누면, 나머지 값이 원래의 수의 1의 자리씩 떨어진다. 즉, 모든 자리의 수를 구할 수 있다!
// (3) JavaScript 특성 상, 0을 false로 이용할 수 있다.