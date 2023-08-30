let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let number = parseInt(readLine());
let temp = number;
let reversedNumber = 0;

while (temp > 0) {
  reversedNumber = (reversedNumber * 10) + (temp % 10);
  temp = Math.floor(temp / 10);
}

let isPalindrome = reversedNumber === number;
  
if(isPalindrome){
    console.log("Yes");
}else {
    console.log("No");
} 