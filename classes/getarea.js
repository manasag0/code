let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
class Circle {
    constructor(radius){
        this.radius = radius;
    }
    getArea(){
        if(this.radius<0){
            return 0;
        }
        return Math.ceil(3.14*this.radius*this.radius);
    }
    getCircumference(){
        if(this.radius<0){
            return 0;
        }
        return Math.ceil(2*3.14*this.radius);
    }
}



let oneCircle = new Circle(parseInt(readLine()));
console.log(oneCircle.getArea());
console.log(oneCircle.getCircumference());