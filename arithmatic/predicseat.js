let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

let n = parseInt(readLine());

 for (let i = 0; i <n; i++){
     let testcase =readLine().split(" ");
     let b = parseInt(testcase[0]);
     let c= parseInt(testcase[1]);
     if (c < 1 || b < c){
         console.log("Invalid");
     } else if (c % 8 == 1 || c % 8 ==4){
        console.log("L");
     } else if (c % 8 == 2 || c % 8 ==5){
        console.log("M");
     } else if (c % 8 == 3 || c % 8 ==6){
        console.log("U");
     } else if (c % 8 ==7){
        console.log("SL");
     } else if(c % 8 == 0){
        console.log("SU")
     }
 }