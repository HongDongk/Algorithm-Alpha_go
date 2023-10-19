 // 이진트리를 그린다!
 // 풀었음!!!!!!!!!!!!!!!!!!!
 
 function solution(max, array){
    let answer = 0;

    function DFS(L, sum){
        if(sum > max){
            return;
        }
        if(L === array.length){
            answer = Math.max(answer, sum);
            return;
        }else{
            DFS(L+1, sum+array[L]);
            DFS(L+1, sum);
        }
    }

    DFS(0,0);

    return answer;

 }

 console.log(solution(259, [81,58,42,33,61]))