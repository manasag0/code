let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
// Read the number of elements in the sequence
let n = parseInt(readLine());
// Read the sequence as an array
let sequence = [];
for (let i = 0; i < n; i++) {
  sequence.push(parseInt(readLine()));
}
// Initialize variables
let maxProduct = sequence[0] * sequence[1];
// Iterate through the sequence and update the maximum product
for (let i = 1; i < n - 1; i++) {
  // Get the current pair of adjacent integers
  const pair = [sequence[i], sequence[i + 1]];
  // Calculate the product of the pair
  const product = pair[0] * pair[1];
  // Update the maximum product if the current product is greater
  if (product > maxProduct) {
    maxProduct = product;
  }
}
// Output the maximum product
console.log(maxProduct);
