// n진 트리
// 재귀는 다중 for문과 같지만 for문을 몇번 돌릴지(m)에 대한 대처를 유동적으로 하기 위해 사용한다.
// 아래는 m중 for문

function solution(n, m){
    let answer=[];
    let tmp = new Array(m).fill(0);
    
    function DFS(L){
        if(L===m){
            answer.push(tmp.slice());  // 얕은복사 방지
        }
        else{
            for(let i=1; i<=n; i++){
                tmp[L]=i;
                DFS(L+1);
            }
        }   
    }
    
    DFS(0);
    return answer;
}

console.log(solution(3, 2));