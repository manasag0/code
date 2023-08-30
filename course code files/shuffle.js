let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
//  let  n = parseInt(readLine());
//  let a =[];
//  for(let i =  0 ; i < n*2 ; i++){
//     a.push(parseInt(readLine(a[i])));
//  }
//  let output = [];
//  for ( let j = 0; j<n;j++){
//     output.push(a[j]);
//     output.push(a[j]+n);
//  }
//  console.log(...output);
let n=parseInt(readLine()); //3
let arr=[];
for(let i=0;i<n*2;i++)
{
    arr.push(parseInt(readLine(arr[i])));
    // console.log(arr);
}

let output=[];
for( let j=0;j<n;j++)
{
    output.push(arr[j]);
    output.push(arr[j+n]);
}
console.log(...output);