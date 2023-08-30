let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// function dognoalsum(mat) {

// let sum = 0;
// let length = mat.length-1;

// for (let i =0; i<mat.length;i++){
//     sum = sum + mat[i][i] + mat[i][length-i]
// } if (length%2===0){
//     sum = sum - mat[length/2][length/2]
// }
// return sum
// }
//  dognoalsum(mat)
