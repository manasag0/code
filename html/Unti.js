function d(i , n){
    if (i==n){
        console.log("c");
        return d(n , i+ 1)
    }
}
let n = 5;
let i = 1;
console.log(d(i,n))