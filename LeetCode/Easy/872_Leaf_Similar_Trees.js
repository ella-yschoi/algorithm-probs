// 872. Leaf-Similar Trees
// 문제 링크: https://leetcode.com/problems/leaf-similar-trees/description/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
// Time Complexity: O(n+m), Space Complexity: O(h1+h2)

// 두 트리 리프 노드들이 유사한 순서일 경우 참을 반환
const leafSimilar = function(root1, root2) {
  function getLeafNodes (node) {
    let leafNodes = [];

    function dfs(current) {
        if (current === null) {
          return;
      }
      if (current.left === null && current.right === null) {
        leafNodes.push(current.val);
      }

      // 좌우 탐색
      dfs(current.left);
      dfs(current.right)
    }

    dfs(node); // 탐색 후 리프노드 수집
    return leafNodes;
  }

  const leaves1 = getLeafNodes(root1);
  const leaves2 = getLeafNodes(root2);

  // 문자열로 변환
  // return leaves1.join('') === leaves2.join('');

  return JSON.stringify(leaves1) === JSON.stringify(leaves2);
};


// Comment
// JSON.stringify 대신 join을 사용하면 테스트 통과가 안됨
// JSON.stringify은 배열을 문자열 표현으로 변환하되 배열의 요소들을 정확한 배열 형태로 유지
// join은 배열의 요소들을 지정된 구분자(e.g. ,) 로 이어 붙여 하나의 문자열로 변환

// TC: root1의 노드 개수 + root2의 노드 개수
// SC: 두 트리의 높이
