let arrA = [1, 2, 3];
let arrB = arrA.slice();

arrB[0] = 10;

console.log(arrA);
// [1, 2, 3]
console.log(arrB);