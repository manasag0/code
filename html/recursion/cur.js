let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

function cur(currency){
    if(currency.length===1){
        return parseInt(currency);
    }
    else{
       const a =parseInt(currency[0]);
       const b = currency.slice(1);
       return a+cur(b);
    }   
}
let currency =readLine()
console.log(cur(currency))
// How is the space of an element measured, if specified by width property