function palin(string,i,j){
    if(i==j){
        return true;
    }
    else if(string[i]!=string[j]){
        return false
    }
    else if(i<j+1){
        return palin(string,i+1,j-1)
    }
    return true;
}

let string = "a";
let i = 0;
let j = string.length-1;
console.log(palin(string, i,j))