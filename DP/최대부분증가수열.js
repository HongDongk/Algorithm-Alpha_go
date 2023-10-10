// dp 테이블 생성필요

function solution(arr){  
    let dp = new Array(arr.length).fill(0);
    dp[0] = 1;
    for(let i = 1 ; i<arr.length; i++){
       let max = 0;
       for(let j = i-1; j>0; j--){
        if(arr[j]<arr[i] && dp[j]>max){
            max = dp[j];
        }
       }
       dp[i] = max + 1;
    }
    
    return Math.max(...dp);
}

let arr=[5, 3, 7, 8, 6, 2, 9, 4];
console.log(solution(arr));