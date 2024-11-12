// 437. Path Sum III
// 문제 링크: https://leetcode.com/problems/path-sum-iii/description/?envType=study-plan-v2&envId=leetcode-75

// My Solution
// Time Complexity: O(N), Space Complexity: O(N)
// Referred to the hint
// 경로를 따른 값의 합: 정수 targetSum과 같은 경로의 수 반환

const pathSum1 = function(root, targetSum) {
  if (!root) return 0;
  
  let count = 0;

  function counter(node, sum) {
    if (!node) return;

    // 트리 traverse -> sum 더해감
    sum += node.val;
    // sum이 targetSum과 같으면 count 증가
    if (sum === targetSum) count++;
    // 왼쪽 node or 오른쪽 node
    return counter(node.left, sum) || counter(node.right, sum);
};

function dfs(node) {
  if (!node) return;

  node.left && dfs(node.left);
  counter(node, 0); // 각 노드에서 새로운 합계 0을 인스턴스화
  node.right && dfs(node.right);
  }

  dfs(root);
  return count;
};

// Another Solution
const pathSum2 = function(root, targetSum) {
  const prefixSums = new Map();
  prefixSums.set(0, 1);  // 초기값으로 누적합 0을 1회 기록 (루트에서 시작하는 경우 포함)

  function dfs(node, currSum) {
    if (!node) return 0;

    // 현재 누적 합에 현재 노드의 값 추가
    currSum += node.val;

    // (누적합 - targetSum)이 존재하면 경로가 targetSum을 만드는 경우
    const targetPaths = prefixSums.get(currSum - targetSum) || 0;

    // 현재 누적 합을 해시맵에 추가하여, 탐색 중인 경로로 포함
    prefixSums.set(currSum, (prefixSums.get(currSum) || 0) + 1);

    // 왼쪽, 오른쪽 자식 노드를 탐색
    const result = targetPaths + dfs(node.left, currSum) + dfs(node.right, currSum);

    // 탐색이 끝난 경로는 해시맵에서 제거하여 다른 경로에 영향 없도록
    prefixSums.set(currSum, prefixSums.get(currSum) - 1);
    
    return result;
  }

  return dfs(root, 0);
};


// Comment
// [코드 요약]
// dfs 함수: 트리를 DFS로 순회하며 각 노드를 방문. 각 노드에서 counter 함수를 호출하여 현재 노드를 루트로 하는 하위 트리에서 targetSum 경로의 수를 카운트한다.
// counter 함수: 현재 노드를 시작으로 경로의 합을 계산, targetSum에 도달할 경우 count를 증가시킨다. 재귀적으로 왼쪽과 오른쪽 자식 노드를 탐색하면서 현재 경로의 합을 누적
// sum을 매번 0으로 초기화하여 각 노드를 경로의 시작점으로 간주한다.
// [예상 질문]
// counter(node, 0)을 호출하는 이유?:
// 각 노드에서 합계 0으로 새로운 경로 계산을 시작하기 위해 호출됨.
// 즉, 각 노드를 경로의 시작점으로 간주해 해당 노드에서 출발하는 경로들 중 targetSum을 만들 수 있는지 확인. 따라서 새로운 합계(sum)를 0으로 초기화해 ‘독립적인’ 경로로 취급
// 더 효율적인 풀이가 있을지?: 해시맵을 이용한 방법으로 TC를 O(n)으로 줄일 수 있음. ‘누적 합(prefix sum)’ 개념을 사용해 현재 노드까지의 경로 합이 targetSum과 일치하는지를 빠르게 확인
// 이를 통해 특정 경로 합이 targetSum 만족 여부를 빠르게 조회하고 계산할 수 있음. 즉, 전체 트리를 한 번만 탐색하면서 모든 경로 합을 확인할 수 있음
// [시간 복잡도]
// dfs 함수: 트리의 모든 노드를 한 번씩 방문하므로 O(n)
// counter 함수: 각 노드마다 counter 호출해 모든 하위 경로 합을 구하는데, 최악의 경우 모든 하위 노드에 대해 탐색하게 되어 각 노드마다 O(n) 시간이 걸림.
// 최악의 경우: 완전 이진 트리에서는 h = logn 될 수 있지만, 편향된 트리의 경우 h = n이 되므로 dfs의 각 노드 방문이 O(n)의 counter를 실행해 전체 시간 복잡도는 O(n^2)이 될 수도 있음
// [공간 복잡도]
// dfs와 counter 함수가 재귀적으로 호출되므로, 스택의 깊이는 트리 높이인 h와 비례
// 단, 편향된 트리의 경우 최대 O(n)
