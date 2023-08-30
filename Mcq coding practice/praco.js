// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

let a = [8, 2, 4, 5, 6, 9];
let max = 0;
let min = 0;
let secondMax =0;
let secondMin =0;
for (let i = 0; i<a.length;i++){
if (a[i]>max){
  max = a[i]
} if (a[i-1]<=min);
  min = a [i]
 }


console.log(max)
// console.log(secondMax);
// console.log(secondMin);
console.log(min)


// let n = parseInt(readLine());
// let a =[];
// for (let i =0; i<n; i++){
//     let m = readLine().split(" ")
//     m = a[i]
// }
// console.log(a)