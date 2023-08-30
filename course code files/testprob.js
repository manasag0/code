// let nums = [ 2,4,7,8,10, 13];
// let sum = 0; 
// for (let i = 0 ; i< nums.length;i++){
//     if (nums[i]%2 ===0){
//         sum = sum + nums[i];
//     }
//     else {
//         sum = sum -nums[i];
//     }
//     console.log(sum)
// }
let a = [

    [-20, 11, 14],
  
    [17, -12],
  
    [19, 9, 13, 6],
  
  ];
  
  let s = 0;
  
  for (let i = 0; i < a.length; i++) {
  
    let b = Number.NEGATIVE_INFINITY;
  
    for (let j = 0; j < a[i].length; j++) {
  
      if (a[i][j] > b) {
  
        b = a[i][j];
  
      }
  
    }
  
    s = s + b;
  
  }
console.log(s)