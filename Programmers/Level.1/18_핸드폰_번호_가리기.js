// 18. 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 나의 풀이: fill() & slice() & push() & join() 사용
function solution(phone_number) {
    let newArr = new Array(phone_number.length - 4).fill("*")
    let newNum = phone_number.slice(-4);
    newArr.push(newNum)
    return newArr.join("");
}

// 다른 풀이 1: 정규 표현식
function solution(phone_number) {
    return phone_number.replace(/\d(?=\d{4})/g, "*");
    }

// 다른 풀이 2: repeat() & slice() 사용
function solution(phone_number) {
    let answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
    return answer;
    }

// TIL
// (1) 문제 풀이 포인트
    // 1. 새로운 배열을 만들어 phone_number의 전체길이의 4를 빼고 *로 바꾸기
    // 2. phone_number의 마지막 숫자 4개를 변수에 담아서 새로운 배열에 추가하기
    // 3. 배열안의 문자열을 하나의 문자열로 합쳐준다

// (2) repeat()
    // 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환한다.
    str.repeat(count);
    "abc".repeat(2); // 'abcabc'

// (3) slice()
    // 어떤 배열의 시작부터 끝까지(**마지막 요소는 미포함)에 대한 얕은 복사본을 새로운 배열 객체로 반환한다. 원본 배열은 바뀌지 않는다.
    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
    console.log(animals.slice(2)); // ["camel", "duck", "elephant"]
    console.log(animals.slice(2, 4)); // ["camel", "duck"]

// (4) fill()
    // 배열의 시작 인덱스부터 끝 인덱스의 **이전까지 정적인 값 하나로 채운다.
    // arr.fill(value[, start[, end]])
    // arr.fill('A', 1, 3) // [a, b, c, d] -> [a, A, A, d]
    const array1 = [1, 2, 3, 4];
    console.log(array1.fill(0, 2, 4)); // [1, 2, 0, 0]
    console.log(array1.fill(5, 1)); // [1, 5, 5, 5]
    console.log(array1.fill(6)); // [6, 6, 6, 6]