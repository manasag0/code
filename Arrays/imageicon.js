let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let imageSize= parseInt(readLine());
let image =[];
for (let i = 0; i <imageSize;i++){
    image[i]= parseInt(readLine());
}
let iconSize = parseInt(readLine());
let icon =[];
for (let i = 0; i<iconSize;i++){
    icon[i] = parseInt(readLine());
}

let matches = 0;
if (iconSize ===0){
    matches = 0;
} else if (imageSize ===1) {
 for (let i = 0; i<imageSize;i++){
    if(image[i]===icon[0]){
        matches++;
    }
 }
} 
else{
 for (let i = 1; i<imageSize;i++){
    if (image[i]=== icon[1]&& image[i-1]=== icon[0]){
        matches++;
    }
 }
}
console.log(matches);