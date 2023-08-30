// // let N = 24;
// // if (N%2 !==0){
// //     console.log("Weird")
// // }
// // else if( N%2 === 0)
// // {
// // if (N>=2 && N<=5)
// // {
// //             console.log("Not weird");
// //         }
// //         else if (N>=6 && N<=20)
// //         {
// //             console.log("Weird");
// //         } 
// //         else if (N> 20)
// //         {
// //             console.log("Not Weird");
// //         }
// // }
// // if(N % 2 != 0) {
// //     console.log("Weird");
// // } else if(N % 2 == 0) {
// //     if(N >= 2 && N <= 5) {
// //         console.log("Not Weird");
// //     } else if( N >= 6 && N <= 20) {
// //         console.log("Weird");
// //     } else if(N > 20){
// //         console.log("Not Weird");            
// //     }
// // }

// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//     idx++;
//     return data[idx - 1].trim();
// }

// let arr = readLine().split(" ")
// let a = [];
// for (let i = 0; i<= arr.length;i++){
//     let ans = a.push(parseInt(ans))
//  console.log(ans)
// }




let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

let n = parseInt(readLine());

let odd =0;
let even =0;
for (let i = 0; i <n; i++){
    if ( i%2=== 0){
        even++;
    }
    else if (i%2 !== 0){
        odd++;
    }
}
console.log(odd);
console.log(even);