// 재귀함수가 너무 많이 돌게되면 오래걸리므로 
// 메모이제이션을 통해 구했던 값을 저장하여 재사용 한다!!(DP)

function solution(n, r){     

    let dy = new Array(35).fill(0).map((a) => new Array(35).fill(0)); // 2차원배열 만드는 방법

    function DFS(n, r){
        if(dy[n][r]>0) return dy[n][r];
        if(n===r || r===0) return 1;   // 3C0 = 1, 3C3 = 1;
        else return dy[n][r]=DFS(n-1, r-1)+DFS(n-1, r);
    }

    return DFS(n, r);

}

console.log(solution(33, 19));