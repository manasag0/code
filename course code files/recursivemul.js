let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
 function recMulti(n){
    if(n<0){
        n = -n;
    }
    if (n<10&&n>=0){
        return n;    
    } else { 
        return n%10*recMulti(parseInt(n/10))
    }
 }
let t = readLine();
for (let i =0; i<t; i++){
    let n = parseInt(readLine())
    console.log(recMulti(n))
}
// function rec(n){
//     if(n<0){
//        n=-n
//     }
//     if(n<10 && n >=0){
//         return n
//     }
//     else{
//         return n%10 * rec(parseInt(n/10))
//     }
// }
// let t = readLine()
// for(let i =0;i<t;i++){
//     let n = parseInt(readLine())
//     console.log(rec(n))
// }