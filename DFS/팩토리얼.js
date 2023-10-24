// 전값 계속불러오는 형태의 재귀방식

function solution(n){         

    function DFS(L){
        if(L === 1) return 1;
        else{
            return L*DFS(L-1) 
        }
    }

    return DFS(n);
}

console.log(solution(5));