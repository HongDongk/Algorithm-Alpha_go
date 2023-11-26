// 재귀함수가 너무 많이 돌게되면 오래걸리므로 
// 메모이제이션을 통해 구했던 값을 저장하여 재사용 한다!!(DP)
function solution(n, r){     

    let dy = new Array(n+1).fill(0).map(() => new Array(r+1).fill(0)); // 2차원 배열 dy에 구해놓은 값저장 (ex) dy[3][1] = 3

    function DFS(n, r){
        if(dy[n][r]>0) return dy[n][r];
        if(n===r || r===0) return 1;   // 3C0 = 1, 3C3 = 1;
        else return dy[n][r]=DFS(n-1, r-1)+DFS(n-1, r);
    }

    return DFS(n, r);

}

// 메모이제이션 없을때 풀이(느림)
function solution(n, r){     

    function DFS(n, r){
        if(n===r || r===0) return 1;   // 3C0 = 1, 3C3 = 1;
        else return DFS(n-1, r-1)+DFS(n-1, r);
    }

    return DFS(n, r);

}


console.log(solution(33, 19));