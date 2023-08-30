/*
Transpose Matrix
You are given m lists. Each list contains n elements. Represented as a matrix, this has m rows and n columns. Your task is to transpose the matrix and output the result.

Write a function with name transposeMatrix which takes a matrix as list of lists as input returns a transposed matrix as list of lists.

Matrix transpose
Given a matrix:

 a b c d

 e f g h
the transpose is:

 a e
 b f
 c g
 d h
Input
The first line contains m, denoting the number of lists

This is followed by m lines each containing n integers separated by space

Output
n lines should contain each row of the matrix, with the elements separated by a space

Example
Input:
3
1 2 3 4
5 6 7 8
9 10 11 12
Output:
1 5 9
2 6 10
3 7 11
4 8 12
You just have. to return transformed matrix as a list, printing is taken care of by the judge.
*/
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let m =parseInt(readLine());
let arr=[];
let brr = [];
for(let i=0; i<m; i++){
 
    arr.push (readLine().split(" "));
}
 
 for (let i = 0; i<arr[0].length;i++){
   let temp = [];
   for (let j = 0; j<m;j++){
      temp.push(arr[j][i]);
   }
   brr.push(temp);
}
   for (let i=0; i<brr.length;i++){
      console.log(...brr[i])

   }
 