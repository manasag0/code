let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let N = parseInt(readLine()); //15
let isPrime = [];     // empty array

for(let i =0; i <=N; i++){ //isPrime = [0, 0, 0, ..0]
   isPrime.push(0);
}
isPrime[0]= 1; //isPrime = [1, 0, 0,.. 0]
isPrime[1]= 1; //isPrime = [1, 1, 0,.. 0]

for(i =2; i<=N;i++){     
   if(isPrime[i]==0){
      for(j=2*i;j<=N;j=j+1){
         isPrime[j]=1;
      }
   }
}
for (i=2; i<=N; i++){
   if(isPrime[i]==0){
      console.log(i);
   }
}