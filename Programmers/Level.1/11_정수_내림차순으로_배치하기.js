// 11. 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 

// 나의 풀이: 문자풀이1
function solution(n) {
    return Number(n.toString().split("").sort((a, b) => b - a).join(""));
}

// 다른 풀이 1: 문자풀이2
function solution(n) {
    const newN = n + "";
    const newArr = newN
        .split("")
        .sort()
        .reverse()
        .join("");

    return +newArr;
}

// 다른 풀이 2: 숫자풀이
function solution(n) {풀이
    let r = 0, e = 0, arr = [];

    do {
        e = n % 10;

        // 정렬
        if (arr.length == 0) arr.push(e);
        else for (let i = 0, len = arr.length; i < len; i++) {
            if (arr[i] <= e) { arr.splice(i, 0, e); break; }
            if (i == len - 1) arr.push(e);
        }
    } while (n = Math.floor(n / 10), n > 0);

    return parseInt(arr.join(""));
}

// TIL
// (1) 내림차순 오름차순 sort()
let numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
    return a - b;
    });
  console.log(numbers); // [1, 2, 3, 4, 5]

let numbers2 = [4, 2, 5, 1, 3];
numbers2.sort(function(a, b) {
    return b - a;
    });
  console.log(numbers2); // [5, 4, 3, 2, 1]

// (2) 배열의 모든 요소를 하나로 묶는 join()
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join()); // "Fire,Air,Water"
console.log(elements.join('')); // "FireAirWater"
console.log(elements.join('-')); // "Fire-Air-Water"