// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1].trim();
// }
// //hack money
// // -------- Do NOT edit anything above this line ----------
// function hackmoney(startMoney,m){
//     if(startMoney==m){
//         return 1;
//     } if(startMoney>m){
//         return 0;
//     }
//     return hackmoney(startMoney*10,m)||hackmoney(startMoney*20,m);
// }

// let n = parseInt(readLine());
// for (let i =0;i<n;i++){
//     let m = parseInt(readLine())
//     let ans = hackmoney(1,m)
//     if(ans==1){
//         console.log("Yes")
//     }else {
//         console.log("No")
//     }
// }




let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
function jumpGame(a,N,index){
    if(index>=N){
        return 0;
    }
    return Math.min(jumpGame(a,N,index+1),jumpGame(a,N,index+a[index]))+1;
}
function converToNum(a){
    for (let i = 0; i<a.length;i++){
        a[i]=parseInt(a[i]);
    }
    }

let N = parseInt(readLine());
let a = readLine().split(" ");
converToNum(a);
console.log(jumpGame(a,N,0));