function solution(answers) {
    // 정답 배열 answers와
    const answer = [];
    
    // 각 수포자들 답변 패턴
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];
    
    // 각 수포자들 정답 수 계산
    function score(answers, pattern) {
        return answers.filter((a, i) => a === pattern[i % pattern.length]).length;
    }
    
    // 각 수포자 점수 계산
    const scores = patterns.map(pattern => score(answers, pattern));
    
    // 최고 점수 계산
    const maxScore = Math.max(...scores);
    
    // 최고 점수 받은 수포자 찾기
    scores.forEach((s, i) => {
        if (s === maxScore) {
            answer.push(i + 1);
        }
    });
    
    return answer;
}