let a = [1,3,5,7,8,9]
let b = [2,3,4,5,6,7]
let c = [1, 3, 5, 6, 7]

a.filter((value)=>{
    return b.includes(value)&&c.includes(value)
})

console.log(a)