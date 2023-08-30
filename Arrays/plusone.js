// Given a non-negative number represented as a list of digits, add 1 to the number (increment the number represented by the digits). The digits are stored such that the most significant digit is first element of array.
 

// Example 1:

// Input: 
// N = 3
// arr[] = {1, 2, 4}
// Output: 
// 1 2 5
// Explanation:
// 124+1 = 125, and so the Output

// let arr = [9,9,9]

// let num = (parseInt(arr.join(""))+1).toString();
// let output = [];
// for(let i = 0;i<num.length;i++){
//     output.push(num[i]);
// }
// console.log(output.join(""));

// let currentMoney= 800;
// let laptopPrice = 1000;
// let laptopDiscountPrice = laptopPrice - (laptopPrice * .20) //Laptop price at 20 percent off

// if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice){
//     //Condition was true. Code in this block will run.
//     console.log(laptopDiscountPrice)
//     console.log("Getting a new laptop!");
// }
// else {
//     //Condition was true. Code in this block will run.
//     console.log("Can't afford a new laptop, yet!");
// }


// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(number => console.log(number)); // 1 2 3 4 5

// numbers.forEach((number, index) => console.log(`Number ${number} ${index}`));

let iceCreamFlavors = [
    { name: "Chocolate", type: "Chocolate" }, 
    { name: "Strawberry", type: "fruit"}, 
    { name: "Vanilla", type: "Vanilla"}, 
    { name: "Pistachio", type: "Nuts"}, 
    { name: "Neapolitan", type: "Chocolate"}, 
    { name: "Mint Chip", type: "Chocolate"}
  ];

  iceCreamFlavors.map(flavor => {
    flavor.price = 1;
    console.log(flavor)
    console.log(typeof flavor)
  })

