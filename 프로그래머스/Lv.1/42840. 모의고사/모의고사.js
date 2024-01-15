function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];

    let maxScore = 0;
    const result = [];

    patterns.forEach((pattern, i) => {
        const score = answers.reduce((acc, cur, idx) => 
            acc + (cur === pattern[idx % pattern.length] ? 1 : 0), 0);

        if (score > maxScore) {
            maxScore = score;
            result.length = 0; // 배열 초기화
            result.push(i + 1);
        } else if (score === maxScore) {
            result.push(i + 1);
        }
    });

    return result;
}
