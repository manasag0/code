let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// let n = parseInt(readLine());
// let a  = readLine().split(" ")
// let s  = 0;
// let max = a[n-1];
// for (let i = n-2; i>=0; i--){
//     if (a[i]>max){
//         max = a[i]
//     }
//     s = s+ (max-a[i])
// }

// let num = parseInt(readLine())
// let num2 = readLine().split(" ")
// let count =0;
// let a =[]
// for (let i = 1; i<=num; i++){
//   let seq= parseInt(num2[i])
//   a.push(seq)
//  if(i%2===0){
//   count++
//  }
// }
// console.log(a)

// function myFun() {
//   console.log("Hello");
//   console.log("byebye")
//   return "World";
 
// }
// myFun();
// const dogs = {
//   Fido: "Mutt",
//   Hunter: "Doberman",
//   Snoopie: "Beagle"
// };

// const myDog = "Hunter";
// const myBreed = dogs[myDog];
// console.log(myBreed);
// Setup
// const testObj = {
//   12: "Namath",
//   16: "Montana",
//   19: "Unitas"
// };

// // Only change code below this line
// const playerNumber = 16;
//   // Change this line
// const player = testObj[playerNumber];
// console.log(player) 

// let price = parseInt(readLine());
// let gstper = parseInt(readLine());

// let getgst = price/gstper;
// console.log(parseInt(getgst))
// let finalPrice = getgst+ price;
// console.log( parseInt(finalPrice))

// let num = parseInt(readLine());
// let a  = [];

// for (let i = 0; i<num; i++){
//   a.push(readLine());
// }
// let count = 0;
//  let on = false;
// for (let i = 0; i<a.length;i++){
//    if(a[i]=="ON"){
//     if(!on){
//     count++;
//    }
//    on = true;
//   }

// else if (a[i]==="OFF"){
//   on = false;
// }
//   else if (a[i]==="Toggle"){
//     if(!on){
//       count++
//     }
//     on = !on;
//   }
// }
// console.log(count)


let num;
for (num=10;num>0;num--){
  console.log(num)

}













