// 나의 풀이
function solution(budget, products) {
  // 상품 가격과 배송비를 합산한 뒤 정렬
  products.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
  let answer = 0;

  // 할인 O
  for (let i = 0; i < products.length; i++) {
    let money = budget - (products[i][0] / 2 + products[i][1]); // 배송비 제외 할인
    // 할인 X
    let count = 1;
    for (let j = 0; j < products.length; j++) {
      if (j !== i && (products[j][0] + products[j][1]) <= money) {
        // 개수는 늘고, 예산은 줄고
        money -= (products[j][0] + products[j][1]);
        count++;
      }
    }
    // 최대 개수 구하기
    answer = Math.max(answer, count);
  }

  return answer;
}

let arr1 = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr1)); // 4


// 다른 풀이
function solution(m, product){
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => (a[0]+a[1]) - (b[0]+b[1]));
  for (let i = 0; i < n; i++){
    let money = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;
    for (let j = 0; j < n; j++){
      if (j !== i && (product[j][0] + product[j][1]) > money) break; // 계속 for문 돌지 않게 break 걸어줌
      if (j !== i && (product[j][0] + product[j][1]) <= money) {
        money -= (product[j][0] + product[j][1]);
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }  
  return answer;
}

let arr2 = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr2)); // 4
