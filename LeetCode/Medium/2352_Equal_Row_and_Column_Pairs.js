// 2352. Equal Row and Column Pairs
// 문제 링크: https://leetcode.com/problems/equal-row-and-column-pairs/description/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
// 동일한 행과 열 쌍이 있을 경우 카운트 증가
// HashMap 사용해 각 행과 열을 문자열로 변환 -> key 저장 -> 비교 & 중복 확인

const equalPairs = function(grid) {
  const rowMap = new Map();
  let count = 0;

  // 1. 각 행을 문자열로 변환해 Map에 저장
  for (let row of grid) {
    const rowStr = row.join(',') // -> n2? n? unique or not
    // 등장 횟수 저장 (없다면 undefined 대신 0 사용)
    rowMap.set(rowStr, (rowMap.get(rowStr) || 0) + 1);
  }

  // 2. 각 열을 문자열로 변환해 행과 비교
  for (let c = 0; c < grid[0].length; c++) { // grid[0]: 첫 번째 행
    const col = [];
    for (let r = 0; r < grid.length; r++) {
      col.push(grid[r][c]); // 열 -> 열 배열
    }
    const colStr = col.join(','); // 열 배열 -> 문자열

    // 3. 동일한 행 문자열이 Map에 있는지 중복 확인
    if (rowMap.has(colStr)) {
      count += rowMap.get(colStr); // 등장 횟수 카운트
    }
  }

  return count;
};


// Comment
// 행과 열을 각각 한 번씩 순회하므로 O(n^2)의 시간 복잡도를 가짐. n은 grid 한 변의 크기.
// 각 행을 저장할 때 문자열로 변환한 값을 저장하는 데에 필요한 공간을 사용하므로 O(N)
