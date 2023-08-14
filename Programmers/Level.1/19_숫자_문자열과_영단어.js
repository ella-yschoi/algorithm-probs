// 19. 네오와 프로도가 숫자놀이를 하고 있습니다. 네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.
// 다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

// - 1478 → "one4seveneight"
// - 234567 → "23four5six7"
// - 10203 → "1zerotwozero3"

// 이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

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