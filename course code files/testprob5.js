// function tribnum(number){
//     number= number*3;
//     console.log(tribnum(number))
// }
// let number = 15;
// number = tribnum(15);
// console.log(tribnum)
// console.log(number);

// let a = 5;
// a = 5+7;
// console.log(a);

// function triple(arr,brr){
//     for (let i = 0; i <arr.length; i++){
//         arr[i]=arr[i]*3;
//         }
//     for (let j =0; j< brr.length;j++){
//         brr[j]=brr[j]*3;
//     }
// }
// let arr = [1, 2, 3];
// let brr = [10, 20, 30];
// triple(arr);
// console.log(arr);
// triple(brr);
// console.log(brr);
// function sn (c, d){
//     let t = a; // t =10
//     a = b;  //10=20
//     b =t;// 20 = 10
    
//     console.log(t);
//     console.log(a);
//     console.log(b);
//  }
// let a = 10;
// let b = 20;
// // sn(a, b);
// // console.log(a,b)

// function sn (c, d){
//     let a = c; 
//     let b = d;
//     let t = a; // t =10
//     a = b;  //10=20
//     b =t;// 20 = 10
    
//     console.log(c);
//     console.log(d);
//     console.log(a);
//     console.log(b);
//     c
//  }
// let a = 10;
// let b = 20;
// sn(a, b);
// console.log(a,b)

// function s (x , y){
//     let t = x; 
//     x = y;
//     y = t;
//     s (x,y);
//  console.log(x);
// }
// let x = [1,2,3];
// let y = [ 4, 5, 6];
// s(x,y);

function s (x , y){
    let t = x; 
    x = y;
    y = t;
  
    // console.log(x);
    return x;
}
let x = [1,2,3];
let y = [ 4, 5, 6];
x= s(x,y);
console.log(x);


