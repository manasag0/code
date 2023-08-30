let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}


// let m = readLine().split(" ");
// let a = [];
// for (let i = 0 ; i<m.length;i++){
//   a.push(m[i])
// }
// console.log(a);

// let n = parseInt(readLine());
// let b =[];


// let m = readLine().split(", ")
// let a =[];
// let max = 0;
// let min = 0;
// for (let i =0; i<m.length;i++){
//     a.push(parseInt(m[i]))
//     if (max < a[i]){
//       max = a[i]
//     }
//     if (min=>a[i]){
//       min = a[i]
//     }
// }
// console.log(max)
// console.log(min)
// console.log(max+min-8)