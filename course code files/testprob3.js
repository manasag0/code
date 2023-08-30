// // let arr = [ 10 , 8 , 3, 5, 6, 1];
// // arr.push(0);
// // let i = arr.length-1;
// // // console.log(arr);
// // for (; i !=3; i--){
// //     arr[i]= arr[i-1];
// //     // console.log(arr[i]);
// // }
// // arr[i] = 100;
// // console.log(arr);
// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

// let n = parseInt(readLine());

// let mul = 0;

// console.log(n*(n+1)/2);

// // for(let i = 1; i<=n; i++){
// //     mul = mul % i;
// // }
// // console.log(mul);

// // sum of first N natural number is n*(n+1)/2

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}