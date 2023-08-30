let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let input = parseInt(readLine());
let num = input;

let result = 0;
 while (num > 0){
    let digit = num % 10;
    result = result*10+digit;
    num = parseInt(num/10);
 }
 if (input === result){
    console.log("True");
 } else {
    console.log("False");
 }
