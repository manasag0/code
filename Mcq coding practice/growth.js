let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let n =readLine().split(" ");
let a =[];
let sum  =0;
for(let i =0; i<n.length;i++){

    a.push(parseInt(n[i]))
    while(sum <a.length){
      sum = sum +a[i];
    }
    console.log(sum)
}















// let sum = 0;
// for(let i = 0; i<n; i++){
//     let num = parseInt(readLine());
//     sum = sum + num;
// }

// let avg = sum/n;
// console.log(avg)
// if (avg >100 ){
//     console.log("Excellent!")
// }
// else {
//     console.log("Not Excellent!")
// }