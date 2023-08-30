// let x = 25;

// function squereOfx(x){
//     if(x<=0){
//         return 1;
//     }
// return Math.sqrt(x)

// }

// console.log(squereOfx(x))

//find the first duplicate in a array
// let arr=[3,4,-6789,3,4];

// function findDuplicate(arr){
//     let empArr = new Set();
//     for(const numbers of arr){
//         if(empArr.has(numbers)){
//             return numbers
//         }else{
//             empArr.add(numbers)
//         }
//     }
//     return undefined
// }

// console.log(findDuplicate(arr))

let  s ="()[]{}"

var isValid = function(s) {
    let stack =[]

    let keyVal = {
        '(':')','[':']','{':'}'
    }
    for(const syms of s){
        if(keyVal[syms]){
            stack.push(syms)
        }else {
            const last = stack.pop();
            if(syms !== keyVal[last]){
                return false
            }
        }
    }
 return  stack.length ===0;
};


console.log(isValid(s))