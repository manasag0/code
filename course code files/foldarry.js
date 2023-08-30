let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let a = [];
let n = parseInt(readLine());
for ( let i = 0; i < n ; i++){
    a.push(parseInt(readLine()));
    // console.log(a);
}
let noFolds = parseInt(readLine());
for (let i = 0; i <noFolds; i++){
// console.log(noFolds);
if (a.length%2===0){
    for(let j = 0; j <a.length/2; j++){
        a[j]=a[j]+a[a.length-j-1];   
    }
    a.length = a.length/2;
}
 else {
        for (let j = 0; j<a.length;j++){
            a[j]= a[j]+ a[a.length-j-1];

        }
        a.length= (a.length+1)/2;
    }
}
console.log(a.length);
for (let i =0; i< a. length; i++){
    console.log(a[i]);
}

console.log(noFolds);