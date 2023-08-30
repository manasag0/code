let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function isPolindrom(s){
    if (s.length==1){
        return "True";
    }
    if(s[0]==s[s.length-1]){
        return "True";
    }
    else{
        return "False";
    }
}

let n = parseInt(readLine());
for(let i = 0; i<n;i++){
    let s = readLine()
    console.log(isPolindrom(s))
}