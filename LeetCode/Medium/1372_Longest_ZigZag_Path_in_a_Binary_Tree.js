// 1372. Longest ZigZag Path in a Binary Tree
// 문제 링크: https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
// Time Complexity: O(N), Space Complexity: O(N)

// 왼쪽과 오른쪽 각각 방향으로 지그재그 두 가지 재귀 호출
// 길이를 count 변수로 저장하고, 탐색하면서 최댓값을 업데이트

const longestZigZag = function(root) {
  let maxZigZag = 0;

  function dfs(node, isLeft, length) {
    if (!node) return;

    maxZigZag = Math.max(maxZigZag, length);

    if (isLeft) {
      dfs(node.left, false, length + 1);
      dfs(node.right, true, 1);
    } else {
      dfs(node.right, true, length + 1);
      dfs(node.left, false, 1);
    }
  }

  dfs(root.left, false, 1); // 왼쪽 시작
  dfs(root.right, true, 1); // 오른쪽 시작

  return maxZigZag;
};


// Comment
// [예상 질문]
// 1. 더 최적화 할 수 있는 방법?
  // 재귀적으로 모든 노드를 탐색해 각 노드에서 가능한 지그재그 경로를 추적하는 방식.
  // 상수 시간 작업을 수행하므로 이미 효율적이라 생각. 노드 한 번씩 방문, 경로 탐색도 한 번씩만 진행.
  // 단.. 매우 큰 트리에서는 재귀 호출로 인한 stack overflow 문제 발생 가능
// 2. dfs(node, isLeft, length)에서 isLeft와 length의 역할?
  // 둘 다 지그재그 경로를 추적하는 데 필요한 정보를 전달.
  // isLeft는 현재 노드에서 어느 방향으로 이동할지 결정 (true, false인 경우에 따라 다름), length는 현재 지그재그 경로의 길이를 저장.
  // 추후 maxZigZag와 비교하는 용도로 최대 지그재그 길이 갱신
// [시간 복잡도]
  // dfs 함수: 각 노드는 dfs 함수를 통해 최대 두 번 호출될 수 있음 (왼쪽, 오른쪽)
  // 모든 노드에서 dfs 호출되므로 모든 노드를 순회하려면 O(n)
// [공간 복잡도]
  // dfs 함수는 트리 깊이만큼 재귀적으로 호출됨
  // 균형잡힌 트리는 O(log n)이지만, 편향된 트리처럼 최악의 경우에는 O(n) 
