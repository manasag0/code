
// // let n = readLine().split(" ");

// // let a = parseInt(n[0]);
// // let b = parseInt(n[1]);

// // let c = 3;
// // let m = a * b *c;


// // if(m%2 !== 0){
// //     console.log("Yes");
// // }else {
// //     console.log("No");
// // }

// // console.log (a);
// // console.log (b);
// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1].trim();
// }

// let n = parseInt(readLine());
// let a = [];
// let max = Number.MAX_SAFE_INTEGER;
// let min = Number.MIN_SAFE_INTEGER;
//  for (let i = 0; i< n; i++){
// let num = parseInt(readLine());
// a.push(num);
// }
// for (let i =0;i<a[i];i++){

//    if (max>a[i]){

//     (a[i]-a[i-1]);
//    }  console.log(a[i]-a[i-1]);
// }
// // console.log(max*min);
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let  n = parseInt(readLine());
let a = [];

for (let i = 0; i<n; i++){
  let num = readLine().split(" ");
 a.push(num);
}
for (let i = 0; i<a.length;i++){
  let sum =0;
  for(let j=0;j<a.length;j++){
    if(a[i]<a[i][j-1]){
       sum = sum+a[i][j-1];
    }
  }
  console.log(sum);
}











