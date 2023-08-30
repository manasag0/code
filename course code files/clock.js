let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

let n=readLine().split(" ");
let arr =[];
for ( let i = 0; i<n.length;i++){
   arr[i]= parseInt(n[i]);
}
   let num1 = (n[0]);
   let num2 = (n[1]);

   let a = num1%12;
   let b = num2%12;
   let sum = a + b;
   if (sum > 12){
      console.log(sum-12);
   }
   else {
    console.log(sum);
   }