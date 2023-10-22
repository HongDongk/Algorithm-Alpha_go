// 트리가 삼진,사진,오진일때 for문 사용!!

function solution(m, arr){
    let answer = 999999;

    function DFS(L, sum){
        if(sum>m) return;
        if(L>=answer) return;
        if(sum===m){
            answer=Math.min(answer, L);
        }
        else{
            for(let i=0; i<arr.length; i++){
                DFS(L+1, sum+arr[i]);
            }
        }
    }
    DFS(0, 0);

    return answer;
}

let arr=[1, 2, 5];
console.log(solution(15, arr));