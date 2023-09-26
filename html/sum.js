let n = 5;
let arr = [1,2,3,4,5]

let even= 0;
let odd = 0;
for(let i = 0;i<n;i++){
    if(arr[i]%2===0){
        even +=arr[i]
    }if(arr[i]%2!==0){
        odd +=arr[i]
    }
}
console.log(odd, even)