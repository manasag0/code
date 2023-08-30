// const { notDeepEqual } = require("assert");
// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1].trim();
// }

// // -------- Do NOT edit anything above this line ----------

// function sumOfFirstN(n){
//  if (n===1){
//      return 1;
//  } else {
//      return n * sumOfFirstN(n-1);
//  }
 
// }


// let n = parseInt(readLine());
// for(i=1;i<=n;i++){
//     let sum= sumOfFirstN(i);
// console.log(i, sum);
// }


// let n = 5;
// for (let i =1;i<=5;i++){
//     for(let j =1; j<=i;j++){
//         console.log(j)
//     }
//     console.log("------")
// }

let A = [3, 2, 1, 56, 10000, 167]

let min = 0;
let max = 0;

    min = Math.min(...A)
    max = Math.max(...A)


console.log(min)
console.log(max)