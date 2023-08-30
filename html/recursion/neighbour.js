// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
// 	idx++;
// 	return data[idx - 1];
// }

// // -------- Do NOT edit anything above this line ----------
// // Use readLine() for taking input, it will read one line of from the input  and is stored in string format
// function panel(panelSize, i, noOA,noOB,currStrng,arrgenments){
// if(i===panelSize){
//     arrgenments.push(currStrng);
//     return;
// }
// if(noOA !==2){
//     panel(panelSize,i+1,noOA+1,0,currStrng+"a"+arrgenments);
//     panel(panelSize,i+1,0,noOB+1,currStrng+"b",arrgenments)
// }
// panel(panelSize,i+1,0,noOB+1,currStrng+"b",arrgenments)
// }
// function neighouors(panelSize){
//     let arrgenments= [];
//     panel(panelSize,0,0,0,"",arrgenments)//for shorting different arugments 
// }

// // let n = parseInt(readLine())
// // neighouors(n);
// function panel(panelSize, i, numOfA,numOfB, curstr, arrgenments){
// if(i===panelSize){
//     arrgenments.push(curstr);
//     return;
// }
// if(numOfA !==2){
//     panel(panelSize,i+1, numOfA+1,0,curstr+"a",arrgenments);
//     if(numOfB !==2){
//         panel(panelSize,i+1,0,numOfB+1,curstr+"b",arrgenments)
//     }
// }else{
//     panel(panelSize,i+1,0,numOfB+1,curstr+"b",arrgenments)
// }
// }
// function neighbours(panelSize){
//     let arrgenments =[]
//     panel(panelSize,0,0,0,"",arrgenments);
//  arrgenments.sort()
//  for(let i =0; i<arrgenments.length;i++){
//     console.log(arrgenments[i])
//  }
// }

// let n = parseInt(readLine());
// neighbours(n)



function func1 (a, b){

    if(b==0){
  
     return 0;
  
    }
  
    else if(b==1){
  
      return a;
  
    }
  
    return a + func1(a,b-1);
  
   
  
    }


    let a = 3;
    let b = 8;

    console.log(func1(a,b))


function abc( n ) {

    if (parseInt(n/2)!=0) {
  
      return (abc(parseInt(n/2)) * 10 + n%2)
  
    }else{
  
      return 1
  
    }
  
    }

    let n = 15;
    console.log(abc(n))

