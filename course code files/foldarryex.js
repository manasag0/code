let a = ['a','b','c','d','e'];
let b = [1, 2, 3, 4, 5];
let output =[]
for (let i =0; i<a;i++) {
    
        output.push(a[i]);
        output.push(a[i+b[i]]);
        console.log(output); 
}
