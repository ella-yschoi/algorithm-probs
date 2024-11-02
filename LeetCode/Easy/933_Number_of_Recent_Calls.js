// 933. Number of Recent Calls
// 문제 링크: https://leetcode.com/problems/number-of-recent-calls/description/?envType=study-plan-v2&envId=leetcode-75

// 나의 풀이
// Time Complexity: O(N), Space Complexity: O(N)
// Class constructor
class RecentCounter {
  constructor() {
    this.queue = []; // initialize & save: O(1)
  }
  ping(t) {
    // Add new request time to queue: O(1)
    this.queue.push(t);

    // Remove when the first element if outside[t-3000]
    while (this.queue[0] < t - 3000) {
      this.queue.shift(); // [TC/SC] O(1) or [TC] O(n)
    }

    return this.queue.length; // O(1)

  }
}


// Comment
// TC: O(n)
// ping 메서드 호출 시 push, shift가 최대 n번까지 수행되므로 O(n)
// 그러나 각 요청은 queue에 한번 추가되고 이후 범위를 벗어나면 한번만 제거되므로 평균적으로는 각 요청당 O(1)
// 최종적으로는 ping 호출이 여러번 반복될 때의 TC는 O(n)

// SC: O(n)
// queue에는 3000m 범위 내 요청만 저장되므로 최대 n개의 요청만 queue에 남음
