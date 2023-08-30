let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// let string = readLine().toLowerCase();
// let strLen = string.length
// let isPalindrome = true;
// for(let i = 0; i<strLen/2;i++){
//     if(string[i]!==string[strLen-1-i]){
//        isPalindrome = false;
//        break;
//        }
//        }
//        if(isPalindrome){
//         console.log("YES");
//        }
//        else{
//        console.log("NO");
//        }

//remove duplicates in the array

let array = [1, 2, 2, 3, 4, 4, 5];
let arrLen = array.length;
let arr = [];
for(let i = 0; i<arrLen;i++){
if(arr.indexOf(array[i])<0){
    arr.push(array[i]);
}
}
console.log(arr)




