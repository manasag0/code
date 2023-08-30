function a(){
    console.log("a")
}
a()

function b(){
    console.log("b")
    a();
}
b()

function c(n){
    if(n==0){
        return ;
    }
    else {
        console.log("c");
        c(n-1);
    }
}
let n = 3;
c(n)
