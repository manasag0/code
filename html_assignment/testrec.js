function pruduct(n){
    if(n==0){
        return 0;
    }
    else {
        
        return n+pruduct(n-1);
    }
}

let n = 5;
console.log(pruduct(n))