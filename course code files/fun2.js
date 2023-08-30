
let a = 15;
function printValue(b){
   console.log(a);
    b =  12;
    a = 20;
    return b;    //console.log(a);
}
let b = 11;
 a = printValue(10);
printValue(a);
console.log(printValue(10));
console.log(b);