// 19. 2021 카카오 채용연계형 인턴십 : 숫자 문자열과 영단어
// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/81301

// 나의 풀이: 인덱스 활용
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s;
    
    for (let i = 0; i < numbers.length; i++) {
        // 문자열을 현재 숫자에 해당하는 영어 표현으로 분할
        let arr = answer.split(numbers[i]);
        // 분할된 문자열을 현재 숫자에 해당하는 숫자로 결합
        answer = arr.join(i);
    }

    // 문자열을 숫자로 변환해 리턴
    return Number(answer);
}

// 다른 풀이 (출처: https://oliviakim.tistory.com/87)
function solution(s) {
    // 0부터 9까지의 영문: 대응하는 숫자값을 객체에 담는다.
    const number = {
        'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4,
        'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9,
    };
    // 한글자씩 순회하기 위해 s를 split('')으로 쪼개 배열에 담는다.
    let arr = s.split('');
    // 임시로 합쳐지는 문자열을 담을 변수 str을 선언한다.
    let str = '';
    // 정답을 담을 변수 answer를 선언한다.
    let answer = '';
    
    for(let i of arr) {
        str += i;
        // [Object.keys] 객체의 키를 배열로 리턴하는 것들 중 str에 해당하는 값이 있는지 찾는다.
        if (Object.keys(number).includes(str)) {
            answer += number[str];
            str = '';
        };
        // [Number.isInteger] 주어진 값이 정수인지 판별한다. i가 숫자일 경우 str*1 값이 true로 반환된다.
        if (Number.isInteger(str * 1)) {
            answer += str;
            str = '';
        }
    }
    // 문자열 answer를 숫자로 반환하여 return한다.
    return Number(answer);
}

// TIL
// split()
    // String 객체를 지정한 구분자를 이용하여 여러 개의 문자열로 나눔
    const str = 'The quick brown fox jumps over the lazy dog.';

    const words = str.split(' ');
    console.log(words[3]); // "fox"

    const chars = str.split('');
    console.log(chars[8]); // "k"