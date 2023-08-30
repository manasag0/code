let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
function numOfWays(elements, key, noOfElements, currentIndex,currentSum,taken){
//basecase
if(currentSum > key||currentIndex > noOfElements){
    return 0;
}
if(currentIndex === noOfElements){
    if(currentSum=== key){
        return 1;
    } else{
        return 0;
    }
}
let ways =0;
if (taken ===0){
    ways += numOfWays(elements,key, noOfElements,currentIndex+1,currentSum,0)

}
ways += numOfWays(elements,key, noOfElements,currentIndex+1,currentSum+elements[currentIndex],0)
if(currentSum+elements[currentIndex]<key){
    ways += numOfWays(elements,key, noOfElements,currentIndex,currentSum+elements[currentIndex],1)
}
return ways;
}

let n = readLine().split(" ")
let noOfElements = parseInt(n[0]) 
let key = parseInt(n[1]);
let elements = readLine().split(" ")
for (let i=0; i<noOfElements;i++){
    elements[i]= parseInt(elements[i])
}

elements.sort((a,b)=>{return a-b});
let currentSum = 0;
let currentIndex =0;
let taken = 0;
console.log(numOfWays(elements,key,noOfElements,currentIndex,currentSum,taken))