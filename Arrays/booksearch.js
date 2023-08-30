let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let catogiry = readLine().split(" ")

let sequence = parseInt(readLine())
for (let i = 0; i<sequence;i++){
    // let bookavi= false;
    let avebooks = readLine()
    for (let j = 0; j<catogiry.length;j++)
        if(avebooks==catogiry[j]){
            console.log("avaliable ")
            // bookavi = true;
            // break;
        }
    // if(bookavi === false){
        // console.log("Not avaliable")
    // }
    
}