// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

// // 3
// // multi with 1 to 10
// // print with 3 * 1 = 3;

// let n = parseInt(readLine());
// let multiple = 0; 
// for(let i = 0; i<=10; i++){
//     multiple = n * i 
// }
// console.log(multiple)



// function product(num1, num2){
//   return num1 * num2;
// }

// console.log(product(3, 5))

// // Do not edit above this line
// // Code Here


// class Point {
//   constructor(x,y){
//     this.x =x;
//     this.y =y;

//   }
//   getX (){
//     return this.x;
//   }
//   getY(){
//     return this.y;
//   }
//   setX(){
//     this.x = x;
//   }
//     setY(){
//       this.y = y;
//     }
// distanceXY(x,y){
//    return Math.sqrt((this.x -x)**2 + (this.y -y)**2)
// }
//   distancePoint(value){
//     return Math.sqrt((this.x -value.getX())**2 + (this.y-value.getY())**2 )
//   }

// }

// // Do not edit below this line 
// let inp1 = readLine().split(" ");
// let inp2 = readLine().split(" ");
// let [x1, y1] = [parseInt(inp1[0]), parseInt(inp1[1])];
// let [x2, y2] = [parseInt(inp2[0]), parseInt(inp2[1])];

// let first = new Point(x1, y1);
// let second = new Point(x2, y2);

// // Output x coordinate of first point
// console.log(first.getX());

// // Output Y coordinate of first point
// console.log(second.getY());

// // Output Distance of first point from origin fixed to 2 decimal places
// console.log(first.distanceXY(0, 0).toFixed(2));

// // Output Distance of first point from second point fixed to 2 decimal places
// console.log(first.distancePoint(second).toFixed(2));

let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}


// let S = "Hacker"
// let half = Math.ceil(S.length/2)
// let f = S.slice(0,half)
// let d = S.slice(half)
// console.log(f,d)
let T = parseInt(readLine());
for (let i = 0; i< T; i++){
    let S = readLine();
    let half = Math.ceil(S.length/3)
    let fistHalf = S.slice(0, half)
    let secondHalf =S.slice(half)
    console.log(fistHalf,secondHalf)
}

