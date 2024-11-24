// 399. Evaluate Division
// 문제 링크: https://leetcode.com/problems/evaluate-division/description/?envType=study-plan-v2&envId=leetcode-75

// My Solution: Referred to hint
// Time Complexity: O((E+Q)∗(N+E)), Space Complexity: O(N)
var calcEquation = function(equations, values, queries) {
  const graph = {};

  // generate graph
  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    const value = values[i];

    if (!graph[a]) graph[a] = []; // init to empty arr
    if (!graph[b]) graph[b] = []; // ready to save weight

    // e.g. a / b = 2.0 -> add [b, 2.0] to graph[a]
    graph[a].push([b, value]) // a -> b : 가중치 value
    graph[b].push([a, 1 / value]); // b -> a : 가중치 1 / value
  }

  function dfs(current, target, visited) {
    if (!(current in graph)) return -1.0;
    if (current === target) return 1.0;

    visited.add(current);

    for (const [neighbor, weight] of graph[current]) {
      if (!visited.has(neighbor)) {
        const result = dfs(neighbor, target, visited);
        if (result !== -1.0) {
          return result * weight;
        }
      }
    }

    return -1.0;
  }

  const results = [];
  for (const [c, d] of queries) {
    if (!(c in graph) || !(d in graph)) {
      results.push(-1.0);
    } else {
      results.push(dfs(c, d, new Set()));
    }
  }

  return results;
};


// Comment
// [시간 복잡도]
  // 그래프 생성 시에는 O(E)
  // DFS 탐색 시에는 각 쿼리당 O(N + E): N는 노드, E는 간선
// 총 O(E + Q (N + E))
// [공간 복잡도]
  // 그래프 저장: O(N + E)
  // DFS 호출 스택: O(N)?
