let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine()); //2
let arr=[];
for(let i=0; i<n; i++){
    arr.push(readLine().split(" "));
}
//console.log(arr);
for(let j=0; j<arr.length; j++){
    let num1 = parseInt(arr[j][0]);
    let num2 = parseInt(arr[j][1]);
    let num3 = parseInt(arr[j][2]);
    let num4 = parseInt(arr[j][3]);
    // console.log(arr[j][0]);
    // console.log(arr[j][1]);
    // console.log(arr[j][2]);
    // console.log(arr[j][3]);
    let count=0;
    for(let k=1; k<10000; k++){
         let sum1 = num1 + (num2 *k);// 1
         let sum2 = num3 + (num4 *k);// 0
         if(sum1 === sum2){
            count++;
            break;
         }
    }
    //console.log(count);
    if(count === 0){
        console.log("No");
    }else{
        console.log("Yes");
    }
}