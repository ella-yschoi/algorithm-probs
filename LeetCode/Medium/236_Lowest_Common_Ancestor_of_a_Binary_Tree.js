// 236. Lowest Common Ancestor of a Binary Tree
// 문제 링크: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
// Time Complexity: O(N), Space Complexity: O(N)
let lowestCommonAncestor = function(root, p, q) {
  if (root === null) return null;

  // 현재 node가 p or q와 같다면 -> that node 반환 -> LCA 후보
  if (root === p || root === q) return root;

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  // left/right에서 하나씩 발견되면 -> that node === LCA
  if (left && right) return root;

  return left || right;
}; 


// Comment
// 각 노드에서 두 번씩 재귀 호출이 일어나므로 이진 트리의 모든 노드들을 한번씩 방문함 -> TC: O(n)
// 각 재귀 호출이 호출 스택이 추가되며, 스택 깊이는 트리 깊이에 비례, 최악까지 고려 -> SC: O(n)
