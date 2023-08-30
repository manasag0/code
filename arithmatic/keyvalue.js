let  keys = ['Ten', 'Twenty', 'Thirty']
let values = [10, 20, 30]

let obj = {}

// for (let  i = 0 ; i <keys.length;i++){
//     obj[keys[i]] = values[i]
// }

keys.forEach((key, index) =>{
 obj[key]= values[index]
})

console.log(obj) 