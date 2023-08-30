let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

//  readline for count
 let n = readLine().split (" ");
 let count = 0; 
 for (i = 0; i <n.length;i++){
  for (j = 0; j<n.length; j++){
    if (i< j && n[i]==n[j]){
      count++;
    }
  }
 }
 console.log(count);