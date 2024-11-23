// 1466. Reorder Routes to Make All Paths Lead to the City Zero
// 문제 링크: https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/description/?envType=study-plan-v2&envId=leetcode-75

// My Solution
// Time Complexity: O(N), Space Complexity: O(N)
// DFS 탐색: 각 도시가 city 0을 방문할 수 있도록 일부 도로의 방향을 바꾸기
  // 1. 방문한 도시를 기록
  // 2. 방향이 필요한 경우 카운트를 증가
  // 3. 재귀적으로 연결된 도시를 탐색

var minReorder = function(n, connections) {
  const adjacencyList = Array.from({ length: n }, () => []) // generate a graph
  const visited = Array(n).fill(false);
  let connectionCount = 0;

  // init a graph
  for (const [a, b] of connections) {
    adjacencyList[a].push([b, true]); // a -> b 원래 방향
    adjacencyList[b].push([a, false]); // b -> a 반대 방향
  }

  function dfs(city) {
    visited[city] = true;
    for (const [nextCity, needsChange] of adjacencyList[city]) {
      if (!visited[nextCity]) {
        if (needsChange) {
          connectionCount++; // needs to change
        }
        dfs(nextCity); // explore a next city
      }
    }
  }

  dfs(0);
  return connectionCount;
};


// Comment
// [시간 복잡도]
  // connections를 한 번 순회해서 그래프 생성 -> O(n)
  // DFS 탐색으로 모든 node와 edge를 한 번씩 방문 -> O(n)
// [공간 복잡도]
  // 그래프 저장, 호출 스택 고려
