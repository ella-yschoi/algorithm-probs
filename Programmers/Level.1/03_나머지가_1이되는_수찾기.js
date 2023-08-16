// 3. 자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요.

// 나의 풀이
function solution(n) {
    let answer = [];
    for (let x = 1; x < n; x++) {
        if (n % x === 1) {
            answer.push(x)
        }
    }
    return Math.min(...answer);
}

// 다른 풀이 1: 무난하게 for문 사용
const solution = function(n) {
    for (let i = 0; i < n; i++) {
        if (n % i == 1){
            return i
        }
    }
}

// 다른 풀이 2: While문 안에서 증감도 가능
function solution(n, x = 1) {    
    while (x++) {
        if (n % x === 1) {
            return x;
        }
    }    
}

// TIL (1) 전개 연산자
// 전개 연산자를 사용하면 배열이나 문자열과 같이 반복 가능한 문자를 0개 이상의 인수 또는 요소로 확장하여, 0개 이상의 키-값의 쌍으로 객체로 확장시킬 수 있다.
// 쉽게 설명하자면, 배열 또는 객체를 하나하나 넘기는 용도로 사용할 수 있다.

const arr = [1, 2, 3];
let test_arr = [4, 5, 6];
let test_arr2 = [4, 5, 6];

// push 할 때 전개 연산자를 사용하지 않으면 array 전체가 들어가 2차원 배열이 되지만, 
test_arr.push(arr);
console.log(test_arr); // [4, 5, 6, [1, 2, 3]]

// 전개 연산자를 사용하면 array 내부의 요소 하나하나가 삽입된다.
test_arr2.push(...arr);
console.log(test_arr2); // [4, 5, 6, 1, 2, 3]

// TIL (2) 풀이 방법
// 굳이 Math.min을 쓰지 않고도 1로 나누어 떨어지는 값이 있으면 바로 return 시키면 된다.