function solution(s) {
    // s: 문자열
    // return: JadenCase로 바꾼 문자열
    // 일단 모두 소문자로 바꿔줌
    // 공백이 있다면
    // 공백 바로 뒤의 첫번째 글자가 소문자라면 대문자로 바꾸기 (숫자라면 X)
    const words = s.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            words[i] = words[i][0].toUpperCase() + words[i].substring(1);
        }
    }
    const answer = words.join(' ');
    return answer;
}