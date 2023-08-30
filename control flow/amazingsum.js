let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let n = parseInt(readLine());
let a =[];
for (let i =0; i<n; i++){
    a.push(parseInt(readLine()));
}
    let max = a[0];
    let senmax = a[0];
    for (let i = 0; i<=a.length; i++){
        if(a[i]>max){
            senmax =max;
            max = a[i];
        } else if (a[i]>senmax){
            senmax = a[i]
        }
        
    }

// console.log(max)
// console.log(senmax)

// if (max + senmax<100){
//     console.log (false)
// } else {console.log(true)}
