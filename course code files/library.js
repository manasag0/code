let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let libraryBooks = readLine().split(" ");
let userQueries= parseInt(readLine());

for (let  i = 0; i < userQueries;i++){
     let bookAvailable = false;       //bookAvailable = true;
    let bookQueriedByUser = readLine();   //bookQueriedByUser = mathematics
        for(let j=0;j<libraryBooks.length;j++) {    //j=1;j<5
        if(bookQueriedByUser == libraryBooks[j]) { //bookQueriedByUser == libraryBooks[1]
               console.log("Available");
                bookAvailable = true;
                break;
            }
        }
        if(bookAvailable == false) {
            console.log("Not available")
        }
     }
     
    /*
     for(let i=0;i<userQueries;i++) {     

        
        let bookQueriedByUser = readLine(); 
        let j=0;  
           for(;j<libraryBooks.length;j++) {   
       if(bookQueriedByUser == libraryBooks[j]) { 
               console.log("Available");
                   break;
               }
           }
           if(j == libraryBooks.length) {
               console.log("Not available")
           }
     }
     */
        