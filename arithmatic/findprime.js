let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = parseInt(readLine());

for (let  i =0; i <n;i++){
    let number = parseInt(readLine());
    let isPrime = true;
    if (number<2){
        isPrime = false;
    } else {
        for (let j = 2; j<number; j++){
            if (number % j ===0){
                isPrime = false;
                break;
            }
        }
    }
    if (isPrime){
        console.log("Yes");
    } else {
        console.log("No");
    }
}