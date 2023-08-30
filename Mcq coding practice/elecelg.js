let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());

let count = 0;
for (let i =0; i<n; i++){
    let m = parseInt(readLine())
    if(m>18){
        
        console.log("Elegible age "+ m)
        count++;
    } else{
        console.log("Nt elegbile age "+ m)
    }
}
console.log(count)