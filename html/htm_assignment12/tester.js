// let a = [[2,4,5]
//        ,[3,5,6]
//        ,[1,7,8]]
// let sum =0
// for(let i =0;i<a.length;i++){
//     for(let j =0; j<a[i].length;j++){
//             if(i+j==2){
//                 sum = sum+a[i][j]
            
//             }
//     }
// }
// console.log(sum)

// function c(n){
//     if(n<4){
//         console.log("C");
//         c(n+1)
//     }
// }

// let n = 1;
// c(n)
// function d(m){
//     if(m<=0){
//         return false;
//     }
//     else {
//         console.log("C");
//         d(m-1);
//     }
// }

// let m= 3;
// d(m)
// function d(m){
//     if(m<=0){
//         return false;
//     }
//     else {
        
//         console.log(m);
//         d(m-1);
//         d(m-1);
//         d(m-1)
        
//     }
// }

// let m= 3;
// d(m)
// function rec(n){
//     if(n>100){
//         return n-10;
//     }else {
//         let a = rec(n+11);
//         return rec(a);
//     }
// }
// let n = 98;

// rec(n)

let a = 10;
let b = 20;
let temp = a; // temp = 10
a=b;  // 10 = 20
b=temp; // 20 = 10
console.log(a)
console.log(b)
console.log(temp)