let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
function minimumValue(inputNumbers){  // min ([ 3, 5, 4, 5, 7 ])
    // Please write below this
    let m1 = inputNumbers[0];  // // 5
    for(let i=0; i<inputNumbers.length-1; i++){ // 5<4 , 4<4 , 2<4,
        if(inputNumbers[i]<=m1){  // 3 < 3 F,
            m1 = inputNumbers[i];
        }
    }
    return m1;
}
function maximumValue(inputNumbers){
    // Please write below this
    let m2 = inputNumbers[1];
    for(let i=0; i<inputNumbers.length-1; i++){
        if(inputNumbers[i]>m2){
            m2 = inputNumbers[i]
        }
    }
    return m2;
    }
    function minimumValue(inputNumbers){  // min ([ 3, 5, 4, 5, 7 ])
        // Please write below this
        let m1 = inputNumbers[0];  // // 5
        for(let i=0; i<inputNumbers.length-1; i++){ // 5<4 , 4<4 , 2<4,
            if(inputNumbers[i]<=m1){  // 3 < 3 F,
                m1 = inputNumbers[i];
            }
        }
        return m1;
    }
    function getNumbersInRange(inputNumbers, m1, m2){ // [ 6, 5, 1, 3, 8, 9, 2],  [ 3, 5, 4, 5, 7 ], [ 7, 6, 4, 4, 23, 2 ]
             // Please write below this line
             let arr = [];
             if(m1<=m2){ // 3<=23
                for(let i=0; i<inputNumbers.length-1; i++){ // [ 6, 5, 1, 3, 8, 9, 2] i<7-1 , i<6
                    let x = inputNumbers[i]; // 6, 5, 1, 3, 8, 9, 2
                    if(m1<=x && x<=m2){  // 3<=x =>6, 5, 3, 8, 9 && <=23
                    arr.push(x);  // arr = 6 5 3 8 9
                }
            }
            }
            if(m1>m2){  // 3>23 F
                for(let i=0; i<inputNumbers.length-1; i++){
                    let x = inputNumbers[i]
                    if(m1>=x && x>=m2){
                        arr.push(x)
                    }
                }
            }
            return (arr.length>0) ? arr : [-1];
        }

        //  Please do not change anything below this line.
function ConvertToNumber(list){
    for(let each in list){
      list[each]=Number(list[each]);
    }
    return list;
  }
  
  
  let list1 = readLine().split(" ");
  let list2 = readLine().split(" ");
  let list3 = readLine().split(" ") ;  
  ConvertToNumber(list1);
  ConvertToNumber(list2);
  ConvertToNumber(list3);
  let m1 = minimumValue(list1);
  let m2 = maximumValue(list2);
  let minMaxRange = getNumbersInRange(list3, m1, m2);
  console.log(...minMaxRange);
