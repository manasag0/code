

function segregateEvenOdd(arr,n){

    let even = [];
    let odd = [];
    
    for(let i = 0;i<n;i++){
        if(arr[i]%2===0){
            even.push(arr[i])
        }if(arr[i]%2!==0){
            odd.push(arr[i])
        }
    }
    
    even.sort((a,b)=> a - b)
    odd.sort((a,b)=> a-b)
console.log(...even, ...odd)
}
    //code here
    


let n = 7;
let arr = [12,34,45,9, 8,90,3]
segregateEvenOdd(arr,n)