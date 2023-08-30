let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}


// let custchoic =parseInt(readLine());
// let op1= 0;
// let op2 = 0;
// let op3 =0; 
// while(custchoic!==0){
//     if (custchoic===1){
//         op1++;
//     }
//     else if(custchoic===2){
//         op2++;
//     }else if(custchoic===3){
//         op3++;
//     }else {
//         console.log("Wrong Choice")
//     }
//     custchoic =custchoic+1;
//     break;
// }

// console.log(op1)
// console.log(op2)
// console.log(op3)