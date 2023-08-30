// input 4
// hello //cat //dog //raining

// output 
// 0 Hello
// 1 cat 
// 2 dog
// 3 raining 

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}


function printer(string){
    for ( let i = 0; i <string.length; i++){
        printWithIndex (i, string[i]);
    }
}

function printWithIndex(index,string){
    console.log(index, string);
}

let noOfStrings =parseInt(readLine());
let stringList=[];
for(let i = 0; i<noOfStrings; i++){
    stringList.push(readLine());
}
printer(stringList);