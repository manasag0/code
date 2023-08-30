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
    else if (a>b){
        return gcd(b,a%b)

    }
    else {
        return gcd(a,b%a)
    }
}

let a = 81;
let b = 64;

console.log(gcd(a,b))