// 이진트리를 그린다!
// 풀었음!!!!!!!!!!!

function solution(maxtime, ps, pt){
    let answer = 0;

    function DFS(L, time, score){
        if(time > maxtime){
            return;
        }
        if(L === ps.length){
            answer = Math.max(answer, score);
            return;
        }else{
            DFS(L+1, time + pt[L] ,score + ps[L]);
            DFS(L+1, time, score);
        }
    }

    DFS(0, 0, 0);

    return answer;

 }

let ps=[10, 25, 15, 6, 7];
let pt=[5, 12, 8, 3, 4]

console.log(solution(20, ps, pt));