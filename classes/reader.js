// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1].trim();
// }

// // -------- Do NOT edit anything above this line ----------
// // Use readLine() for taking input, it will read one line of from the input  and is stored in string format
// class InputReader {
// 	//implement the methods here 
//  readStrings(n){
//     let inputs =[];
//     for (let i =0;i<n; i++){
//         inputs.push(readLine().trim());
//     }
//     for(let i =0; i<n; i++){
//         console.log(i + ' '+inputs[i])
//     }
//  }
//  readIntegers(n){
//     let inputs =[];
//     for (let i =0; i<n; i++){
//         inputs.push(parseInt(readLine().trim()));
//         console.log(i+' '+inputs[i])
//     }
//  }
//  readFloats(n){
//     let inputs =[];
//     for (let i =0; i<n; i++){
//         inputs.push(parseInt(readLine().trim()).toFixed(2));
//         console.log(i+' '+inputs[i])
//     }
//  }
// };

// // -------- Do NOT edit anything below this line ----------

// let num = parseInt(readLine());
// let typeOfInput = readLine();
// let NewInputReader = new InputReader();	
// if (typeOfInput === "string") {
// 		NewInputReader.readStrings(num);
// } else if (typeOfInput === "integer") {
// 		NewInputReader.readIntegers(num);
// } else {
// 		NewInputReader.readFloats(num);
// }


// console.log(5/2);
// let a =[2,4,6,8,10];
// let popA= a.pop();
// console.log(popA);
// let a =0;
// let b= 0;
// while (a<3){
//     a++;
//     b = b+a;
// }
// console.log(b);
let a = [1,2,3,4,5];
// a.pop(3,4,5);
// for (i =0;i<3;i++){
//     a.pop();
// }
// let i = 0;
// while (i<3){
//     a.pop();
//         i+=1
// }
// a = a.slice(0,2)
// console.log(a.pop());
// let arr = [1,2,3,4,5];

// let maxx=0;

// for(let i=0; i<5; i++){

//     if(arr[i]>maxx){

//         arr[i]=maxx;

//     }

// }
// // console.log(maxx)
// let input=[2,4,6,8,10,12];
// while(input.length>0){
//     let len=parseInt((input.length)/2)
//     input=input.slice(0,len)
// }
// console.log(input)
let i = 5

while(true){

    if(i%9 === 0){

        break

    }

    i = i+1

}
console.log(i)