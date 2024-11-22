// 547. Number of Provinces
// 문제 링크: https://leetcode.com/problems/number-of-provinces/description/?envType=study-plan-v2&envId=leetcode-75

// My Solution
// Time Complexity: O(N^2), Space Complexity: O(N)
var findCircleNum = function(isConnected) {
  const n = isConnected.length;
  const visited = Array(n).fill(false); // init
  let provinceCount = 0;

  function dfs(province) {
    visited[province] = true;
    for (let i = 0; i < n; i++) {
      // explore the other province that is connected current province
      if (isConnected[province][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  }  

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i); // find a new province recursively
      provinceCount++;
    }
  }

  return provinceCount;
};


// Comment
// [시간 복잡도]
  // 행렬을 완전히 탐색하므로 O(n^2)
// [공간 복잡도]
  // visited 배열과 DFS 호출 스택에 의해 공간이 사용됨
