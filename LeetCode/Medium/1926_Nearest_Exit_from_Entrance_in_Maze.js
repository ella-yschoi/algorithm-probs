// 1926. Nearest Exit from Entrance in Maze
// 문제 링크: https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/description/?envType=study-plan-v2&envId=leetcode-75

// My Solution
// Time Complexity: O(m x n), Space Complexity: O(m x n)
var nearestExit = function(maze, entrance) {
  const rows = maze.length;
  const cols = maze[0].length;
  const directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1] // right
  ];

  // record the visit history
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false));

  // init the queue
  const queue = [[entrance[0], entrance[1], 0]];
  visited[entrance[0]][entrance[1]] = true;

  // BFS
  while (queue.length > 0) {
    const [row, col, steps] = queue.shift();

    // exit or not
    if ((row === 0 || row === rows - 1 || col === 0 || col === cols - 1) &&
      !(row === entrance[0] && col === entrance[1])) {
        return steps;
      }

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      // can move or not
      if (
        newRow >= 0 && newRow < rows &&
        newCol >= 0 && newCol < cols &&
        maze[newRow][newCol] === '.' &&
        !visited[newRow][newCol]
      ) {
        queue.push([newRow, newCol, steps + 1]);
        visited[newRow][newCol] = true;
      }
    }
  }

  return -1;
};


// Comment
Comment
// [코드 요약]
  // 초기화
  // 큐와 방문 배열 초기화.
  // 큐에 입구 위치를 삽입(스텝: 0)
  // BFS 탐색
  // 큐에서 현재 위치를 꺼내 4방향 탐색
  // 이동 가능한 경우, 큐에 새 위치 추가
  // 출구 확인
  // 이동한 위치가 미로의 가장자리라면 스텝 반환
  // 결과 반환
  // 큐가 비었는데도 출구를 찾지 못하면 -1
// [시간 복잡도]
  // 미로의 모든 셀을 최대 한 번 방문하므로
// [공간 복잡도]
  // 큐와 방문 배열을 사용하므로
