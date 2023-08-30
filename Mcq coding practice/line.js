const { count } = require("console");
let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let sqe = parseInt(readLine())
let aqe = parseInt(readLine());
let cunt =0;
for(i =1;i<aqe;i++){
    let num = parseInt(readLine())
    if(num ===sqe){
        console.log("Present")
        cunt= cunt+1;
        break
    }else{
        console.log("not Present")
    }
   
}
console.log(cunt)