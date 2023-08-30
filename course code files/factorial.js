let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
function factorial(number){
// write your code here
if (number>= 0){
let factorial = 1;
for (let i = 1; i <= number; i++){
  factorial *= i;
  if (factorial ===0){
    return 1;
  }
  else if ( factorial <0){
    return "undefined";
  }

}  
return factorial;
}
  }

let number = parseInt(readLine());

console.log(factorial(number));