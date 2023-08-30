let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let arr = [];
let n =parseInt(readLine());
for(let i=0; i<n; i++){
    arr.push(parseInt(readLine()));
}
let min = [];
min = arr[0];
for(let i=0; i<arr.length; i++){
    if(arr[i]<min){
        min = arr[i];
    }
}
let sum = 0;
//  console.log(min);
while(min > 0){
    sum+=min%10;
    //  console.log(sum);
    min = Math.floor(min/10);
}
    if(sum % 2 === 0){
        console.log(1);
    }else{
        console.log(0)
    }