// 199. Binary Tree Right Side View
// 문제 링크: https://leetcode.com/problems/binary-tree-right-side-view/description/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
// Time Complexity: O(N), Space Complexity: O(N)
let rightSideView1 = function(root) {
  if (!root) return [];
  let output = [];

  function dfs(node, depth) {
    if (!node) return;

    // 현재 depth에서 처음 만나는 node를 output에 추가
    if (depth === output.length) {
      output.push(node.val);
    };

    // right 부터 탐색 -> 가장 먼저 보이는 node 선택
    dfs(node.right, depth + 1);
    dfs(node.left, depth + 1);
  }

  dfs(root, 0);
  return output;
};


// 다른 풀이 1
let rightSideView2 = function(root) {
  if (!root) return [];
  
  const output = [];
  const queue = [root];

  while (queue.length > 0) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();

      // 현재 레벨에서 마지막 node를 output에 추가
      if (i === levelSize - 1) {
        output.push(node.val);
      }

      // 왼쪽 자식과 오른쪽 자식을 queue에 추가
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return output;
};


// Comment
// 각 노드에서 두 번씩 재귀 호출이 일어나므로 이진 트리의 모든 노드들을 한번씩 방문함 -> TC: O(n)
// 각 재귀 호출이 호출 스택이 추가되며, 스택 깊이는 트리 깊이에 비례, 최악까지 고려 -> SC: O(n)
