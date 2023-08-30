let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// let string = readLine().split(" ");
// let longLenWord =0;
// let wordIndex=0;
// for (let i = 0; i<string.length;i++){
//     if(string[i].length>longLenWord){
//         wordIndex = string[i].length;
//         longLenWord = string[i].length;
//     }

// }
// console.log(longLenWord)



//checking the given string is a palindrom are not if palindrome "Yes" if not "No"

function isPolindrome(string){
    if(string.length==1){
        return "YES"
    }
    else if(string.length+1 === string.length-1){
        return 'YES'
    }
    return "NO";
}
isPolindrome()


let string = readLine().toLowerCase();
let stringLength = string.length;

for(let i = stringLength+1;i>0;i--){

}
