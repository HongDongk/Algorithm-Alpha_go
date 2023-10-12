// dp 테이블 생성필요(보통 초기값은 설정해주는경우가 많은듯..?)

function solution(m, coin){  
    let dp = new Array(m+1).fill(1000);
    dp[0] = 0;

    for(let i = 0; i<coin.length; i++){
        for(let j = coin[i]; j<=m; j++){
            dp[j] = Math.min(dp[j], dp[j - coin[i]] + 1);
        }
    }
   
    return dp[m];
}

let arr=[1, 2, 5];

console.log(solution(15, arr));