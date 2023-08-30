let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let ep=parseInt(readLine());
let max=-Infinity;
for(let i=0;i<ep;i++){
  let num=parseInt(readLine());
  //console.log(num);
//console.log([i]);== 1 2 3 4
let input=num;
if(input>max)
{
  max=input;
}
console.log(max);// list of max nos so far
}