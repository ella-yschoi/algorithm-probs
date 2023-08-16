// 5. 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 나의 풀이: 총 합을 배열의 길이로 나누어 줌
function solution(arr) {
    let answer = 0;
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    } 
    return answer = sum / arr.length;
}

// 다른 풀이 1: ES6의 reduce 메소드 활용
function solution(arr) {
    return array.reduce((a, b) => a + b) / array.length;
}

// TIL (refernce: MDN)
// reduce() 메소드를 활용하면 배열의 각 요소에 대해 주어진 reducer 함수를 실행하고 결과값 반환 가능

const array = [1, 2, 3, 4];
const initialValue = 0; // 0 + 1 + 2 + 3 + 4
const sumWithInitial = array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);

console.log(sumWithInitial); // 10
