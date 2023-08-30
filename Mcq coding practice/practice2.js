// sum of even indexed numbers
let m =[40 , 4, 3, 67,23, 44, 11,]
let sum = 0;
for (let i =0; i<m.length; i+=2){
    sum = sum + m[i]
}
console.log(sum)
// even numbers sum
let ssum = 0;
for (let i = 0;i<m.length;i++){
    if(m[i]%2===0){
        ssum = ssum + m[i]
    }
}
console.log(ssum)