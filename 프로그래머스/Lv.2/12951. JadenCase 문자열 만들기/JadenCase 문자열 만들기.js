function solution(s) {
    // 문자열 s
    // 모두 소문자로 바꿔주고 공백 포함 쪼갠걸 words로 선언
    const words = s.toLowerCase().split(' ')
    // for문 순회해서 각 글자 탐색하고
    for (let i = 0; i < words.length; i++) {
        // 만약 문자열 길이가 0보다 크면
        if (words[i].length > 0) {
            // 첫 번째 글자를 대문자로, 나머지 글자는 그대로 리턴
            words[i] = words[i][0].toUpperCase() + words[i].substring(1);;
        }
    }    
    // JadenCase로 바꾼 answer 리턴
    const answer = words.join(' ');
    return answer;
}