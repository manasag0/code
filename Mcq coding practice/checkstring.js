let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

function getletter (s){
    let letter;
    for(let i =0; i<s; i++){
    switch(true){
        case 'aeiou'.includes(s[0]):
            letter = "A"
            break;
        case 'bcdfg'.includes(s[0]):
            letter = "B"
            break;
        case 'hjklm'.includes(s[0]):
            letter = "C"
            break;
        default: letter = "D";
            break;
        
           }
}
}
getletter()
let s = readLine();
