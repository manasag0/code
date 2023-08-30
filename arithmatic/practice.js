let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());
 for (let i = 0; i<n;i++){
  let tc = readLine().split(" ");
  let b = parseInt(tc[0]);
  let c = parseInt(tc[1]);
  if (c<1 || b<c){
    console.log("Invalid");
  }else if(c%8 ==1 || c%8 ==4){
    console.log("Lower")
  } else if (c%8 ==2|| c%8 ==5){
    console.log("Middle")
  } else if (c%8 ==3 || c%8 ==6){
    console.log("Upper");
  }else if (c%8===7){
    console.log("SideLower");
  }else if(c%8===0){
    console.log("SideUpper")
  }
 }