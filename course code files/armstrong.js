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

let number=parseInt(readLine());//153
let sum=0;
let num=number;
while(num!=0){
    let r=num%10; 
    sum=sum+(r**3);
    num=parseInt(num/10);
}
if(sum==number){
    console.log("Yes");
}
else{
    console.log("No");
}