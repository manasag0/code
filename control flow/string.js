// Given a string, made up of only uppercase characters 'R' and 'G', where 'R' stands for Red and 'G' stands for Green. Find out the minimum number of characters you need to change to make the whole string of the same colour.


let string = "RGRGRG";


function minStrchange(string){
let red =  0;
let green = 0;
for(let char of string){
    if (char ==="R"){
        red++;
    }else if (char === "G")
    {green++};
    
}
return Math.min(red,green)
}

console.log(minStrchange(string))