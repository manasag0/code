const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());
let cunt =0;
for(let i = 1; i<n; i++){
    let on = parseInt(readLine())
    let s ="";
    for (let  j = 1; j<=on; j++){
    // console.log(on+" x "+j+" = "+ on*j)
    // if(on*j === 10){
    //     cunt++
    // }
    s = j+s
}
console.log(s)
}
// console.log(s)