// 649. Dota2 Senate
// 문제 링크: https://leetcode.com/problems/dota2-senate/description/?envType=study-plan-v2&envId=leetcode-75

// Radiant queue is empty -> return 'Dire'
// Dire queue is empty -> return 'Radiant'

// 나의 풀이
const predictPartyVictory = function(senate) {
  let radiantQueue = []; // TC: 0(n), SC: O(1)
  let direQueue = []; // TC: 0(n), SC: O(1)

  // Store the initial index of each party in the queue
  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === 'R') {
      radiantQueue.push(i);
    } else {
      direQueue.push(i);
    }
  }

  let n = senate.length;
  // Repeat until only one team remains in the queue
  while (radiantQueue.length > 0 && direQueue.length > 0) {  // TC: O(n)
    let rIndex = radiantQueue.shift(); // TC: O(1)
    let dIndex = direQueue.shift(); // TC: O(1)
    
    // smaller index eliminates the opponent,
    // Add n to the queue for the next, and puts it back in the queue
    if (rIndex < dIndex) {
      radiantQueue.push(rIndex + n); // TC: O(1)
    } else {
      direQueue.push(dIndex + n); // TC: O(1)
    }
  }

  // The lase one left in the queue win!
  return radiantQueue.length > 0 ? 'Radiant' : 'Dire'; // TC: O(1)
};


// Comment
// TC: O(n)
// 모든 연산이 각 의원을 큐에 한 번 추가하고 한 번 제거하는 방식이므로, 최종 시간 복잡도는 O(n)
// SC: O(n)
// 큐에는 최대 n개의 요소가 저장될 수 있으므로, 최종 공간 복잡도는 O(n)
