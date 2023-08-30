let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
//Define the printer function
function printer(list) {
  // Loop through each element of the list and print it with its index using printWithIndex function
 for (let i = 0; i< list.length; i++){
    printWithIndex(i , list[i]);
 }
}

// Do not change anything below this line
function printWithIndex(index,string){
  console.log(index, string);
}

let noOfStrings = parseInt(readLine());
let stringList = [];
for (let i = 0; i < noOfStrings; i++) {
  stringList.push(readLine());
}

printer(stringList);