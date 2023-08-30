function sumOfFirstNum(n){

    let sum = 0;
    if (n==0){
        return 0;
    }else{
        sum = n+ sumOfFirstNum(n-1)
    }
    console.log(n, sum)
    return sum;
}
let n= 5;
sumOfFirstNum(n)