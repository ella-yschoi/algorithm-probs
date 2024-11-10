// 104. Maximum Depth of Binary Tree
// 문제 링크: https://leetcode.com/problems/maximum-depth-of-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
// Time Complexity: O(N), Space Complexity: O(H)

const maxDepth = function(root) {
  if (root === null) {
    return 0;
  }

  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);

  // 현재 노드도 포함하려면 1을 더해줌
  return Math.max(leftDepth, rightDepth) + 1;
};


// Comment
// TC: O(n) 트리의 모든 노드 한 번씩 방문
// SC: O(h) 재귀 호출 스택 깊이는 높이 h에 비례