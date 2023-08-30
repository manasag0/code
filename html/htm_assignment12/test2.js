let a  = [1,2,3,4,5,6,7];
let max = a[0];
let min =a[0];

for (let i =0; i<a.length; i++){
    if(max<a[i]){
        max =a[i]
    }
    if(a[i]<min){
        min =a[i]
    }
}

console.log(max)
console.log(min)