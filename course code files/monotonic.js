let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// number of elements 
 let n = parseInt(readLine());
//   read the first element of the sequence 
let m = parseInt(readLine());
// assume that sequence is monotonic 
let inc = true;
let dec = true;
let a =[];
// loope over remining of elements
for (let i = 1; i<n; i++){
     a = push.parseInt(readLine());
    if (!(c >= m) && !(c <=m)) {
        isMonotonic = false;
        break;
    }
    c =m;
}

// check the sequence for increse and decrese 

//  update the previous element to the current element
console.log(isMonotonic ? 1 :0);
let n = parseInt(readLine());
let arr = [];  //
for(let i=0; i<n; i++)
{
    arr[i] = parseInt(readLine());
}
let inc=true;
let dec=true;
for(let i = 1; i<n; i++ )
{
    if (arr[i-1] < arr[i])
    {
        dec = false
    }
    else if(arr[i-1] > arr[i])
    {
        inc = false
    }
}
 let res = inc || dec
if (res==true)
{
    console.log(1)
}
else
{
    console.log(0)
}