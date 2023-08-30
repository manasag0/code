let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
 function convertToNumber(list){
    for (let each in list){
        list[each] = Number(list[each])
    }
    return list;
 }

function maximumvalue(m2){
    let max = [];
    for (let i =1; i<m2.length; i++){
        if (m2[i]>max){  // 7
            max = m2[i];
        }
    }
    return max;
}
 function minimumvalue(m1){
    let min = [];
    for (let i = 1; i<m1.length; i++){
        if (m1[i]<min){
            min= m1[i];
        }
    }
    return min;
 }
 
function getNumbersInRange(list, m1, m2){
//  main logic 
let result = [];
if(m1<=m2){
for (i = 0; i<list.length; i++){
    if (list[i]>=m1 && list[i]<=m2){
    result.push(list[i]);
    }
  }
}
else {
    for (let i =0; i<list.length;i++){
        if (list[i]>=m2 && list[i]<=m1){
            result.push(list[i]);
        }
    }
}
if (result.length > 0){

    return result;
}
else {
    retrun [-1];
}
}

let list1 = readLine().split(" ");
let list2 = readLine().split(" ");
let list3 = readLine().split(" ");

// console.log(list1, list2, list3);

convertToNumber(list1);
convertToNumber(list2);
convertToNumber(list3);

let m1 = minimumvalue(list1);
let m2 = maximumvalue(list2);

let minMaxRange = getNumbersInRange(list3, m1, m2);
 console.log(minMaxRange);
//  console.log(m1);
//  console.log(m2);