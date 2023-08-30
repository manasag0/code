// Functions
// Question:
// A small town is having elections. Each eligible person has a 4-digit voter-id. 
// There are 3 polling booths in the town. The distribution of voters is as follows.
// Electricity office - [3157, 7764, 4054, 3305, 5258, 6067, 5014, 2780, 8391, 4814, 1848]
// Govt High School - [1038, 7576, 1718, 5658, 4264, 6812, 2473, 4750, 2000, 7156, 7806, 
//     3257, 2935, 4972, 4828, 1185]
// Water management office - [1726, 4260, 8200, 1489, 6198, 7993, 3263, 2104, 4295]
// Write a program that helps the voters to find their polling booth.
// Input: Output
// 5258: Electricity Office
// 4828: Water mangerment Office
// 9999: User is not registed for voting.
// let userInEO = readLine().split(" ");
// let userInGHS = readLine().split(" ");
// let userInWMO = readLine().split(" ");
// let userId = readLine();
// let isUserPresentInEO = false;
// for(let i=0;i<userInEO.length;i++) {
//     if(userInEO[i] == userId) {
//         isUserPresentInEO = false;
//         break;
//     }
// }
// if(isUserPresentInEO) {
//     console.log("Polling boot for user is electifictiy office");
// } else {
//     let isUserPresentInGHS = false;
//     for(let i=0;i<userInGHS.length;i++) {
//         if(userInGHS[i] == userId) {
//             isUserPresentInGHS = false;
//             break;
//         }
//     }
//     if(isUserPresentInGHS) {
//         console.log("Polling boot for user is government high school");
//     } else {
//         let isUserPresentInWMO = false;
//         for(let i=0;i<userInWMO.length;i++) {
//             if(userInWMO[i] == userId) {
//                 isUserPresentInWMO = false;
//                 break;
//             }
//         }
//         if(isUserPresentInWMO) {
//             console.log("Polling booth for user is water managent office");
//         } else {
//             console.log("User is not registered");
//         }
//     }
// }
// Function Defination: Function is block of code which is designed to perfrom a particular task.
// Rules: 
// 1. It is defined with function keyword, followed by function-name followed by "()". 
// 2. Function names can contain letter, digits, underscore and dollar. 
// 3. Parenthesis"()" may include parameter/arguments separate by commas. Function argumetns/parameter are values received
// by function when function will get trigger.
// 4. Code block to be executed on function calls will be defined in {}.
// 5. To call any function syntax will be <f*n-name>();
Advantages:
//1. Code resuability: by functions you will write logic once and use mulitple number of times. So, same logic can be
//used mulitple times without writing it again. It will make size of code smaller.
///2. To resovle any bug/mistake in the code or to do udpate anything in the code, chanages is required at 
//single place although same code is getting exeucted for multiple usecase. 
///3. Sepration of logic specific to components into different functions make your code more Readable. Example
///function takeInput(),function dataValidation(),function isUserCrimeStatus();
// function <f*n-name>(<param1-name>, <param2-name>,,,,<paramN-name>) {
//     //block/logic of code.
// }
// Syntax to call the function
// <f*n-name>(par1, par2,.... parN);
// Example:
// Create one function which takes name and surname of the user and will grett the user. 


function greetUser(name, surname) {
    console.log('Welcome , ${name}, ${surname}');
}
greetUser("Vijay", "Mehta");
greetUser("abc", "def");

