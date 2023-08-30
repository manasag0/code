let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
function ways(noOfElements,index,target,elements,currentSum){
    if(index===noOfElements&& currentSum===target){
        return 1;
    }
    if (index>=noOfElements){
        return 0;
    }
    return ways(noOfElements,index+1,target,elements,currentSum+elements[index])+
    ways(noOfElements,index+1,target,elements,currentSum-elements[index])+
    ways(noOfElements,index+1,target,elements,currentSum)
}

let target = parseInt(readLine());
let noOfElements = parseInt(readLine());
let elements = readLine().split(" ").map(Number);

console.log(ways(noOfElements, 0, target,elements,0))