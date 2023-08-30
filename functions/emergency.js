
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

function calculateTotalFund(salaries, peopleCount){
  let totalFund = 0;
  for (let i=0 ; i <peopleCount; i++){
   
      let fund = Math.ceil((7*salaries[i])/100);
    totalFund= fund + totalFund;
  }
  return totalFund;
}

function ConvertToNumber(list){
  for(let i = 0; i < list.length; i++){
      list[i] = Number(list[i]);
  }
}

let peopleCount = parseInt(readLine());
let salaries = readLine().split(" ");
ConvertToNumber(salaries);
let totalFund = calculateTotalFund(salaries, peopleCount);
console.log(totalFund);