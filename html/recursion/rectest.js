// function febonacci(n){
//     if(n==0){
//         return 0;
//     } if(n==1 || n==2){
//         return 1;
//     }
//     else {
//         console.log(febonacci(n))
//         return febonacci(n-1)+febonacci(n+2);       
//     }
//     }
//     let n = 5;
//     febonacci(n)


// function sum(n){
//     if(n===0){
//         return  n;
//     }
//     else {
//         return n+sum(n-1)
        
//     }
// }


// let n = 3; 
// console.log(sum(n))


// function power(a, b){
//     if(b=== 0){
//         return 1;
//     }
//     else{
//         return a *power(a,b-1)
//     }
// }

// let a = 2;
// let b = 3;

// console.log(power(a,b))

function gcd(a,b){
    if(a==0&&b==0){
        return "NA";
    }
   else if(a==0){
        return b;
    }
   else if(b==0){
    return a;
   }
   else if(a>b){
    return gcd(b,a%b)
   }else {
    return gcd(a,b%a)
   }
}


console.log(gcd(100,150))










