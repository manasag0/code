let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let a = parseInt(readLine());
let b = parseInt(readLine());
let orders = [];
let bills = [];
for (let i = 0; i < a; i++) {
  let o = parseInt(readLine());
  orders.push(o);
}
for (let i = 0; i < a; i++) {
  let bill = parseInt(readLine());
  bills.push(bill);
}
let bt = {};
for (let i = 0; i < a; i++) {
  let o = orders[i];
  let bill = bills[i];
  if (bt[o]) {
    bt[o] += bill;
  } else {
    bt[o] = bill;
  }
}
let mb = 0;
for (let o in bt) {
  let bill = bt[o];
  if (bill > mb) {
    mb = bill;
  }
}
for (let o in bt) {
  let bill = bt[o];
  if (bill === mb) {
    console.log(o);
  }
}