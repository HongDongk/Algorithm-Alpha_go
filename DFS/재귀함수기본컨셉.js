// 재귀함수를 실행시킬 때 함수가 스택 프레임에 쌓인다!!
// 그러다가 마지막값 return되면 pop됨 - (강의복습)

function solution(n){
    function DFS(L){
        if(L===0) return;
        else{
            DFS(L-1);
            console.log(L);   
        }
    }
    DFS(n);
}

solution(3);


