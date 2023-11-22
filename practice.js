<<<<<<< Updated upstream

=======
let arr = [3, 6, 9];
let answer = "";
let temp = new Array(2).fill(0);
let check = new Array(3).fill(false);

function DFS(L) {
  if (L === 2) {
    console.log(temp);
  } else {
    for (let i = 0; i < arr.length; i++) {
      if (check[i] === false) {
        check[i] = true;
        temp[L] = arr[i];
        DFS(L + 1);
        check[i] = false;
      }
    }
  }
}

DFS(0);
>>>>>>> Stashed changes
