// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1].trim();
// }

// class share {
//     constructor(name, color){
//         this.name =name;
//         this.color = color;
//     }
//     changeColor(newColor){
//         this.color= newColor;
//     }
//     putPixels(x,y){
//         console.log("put point on "+x+" and "+"coordinate with "+this.color);
//     }
//     printShapeName(){
//        console.log("This is a "+ this.name)
//     }
//     drawDiagram(){

//     }
// }
// class Rectangle extends share{
//     constructor(length, width){
//         super("Rectangle", "black");
//         this.length = length;
//         this.width = width;
//     }
//     drawRectangle(){
//         for(let i =0; i<5;i++){
//             super.putPixels(5,7);
//         }
//         console.log("Rectangle is drawn");
//     }
// }
// class triangle extends share{
//     constructor(side1, side2, side3){
//         super("triangle", "black");
//         this.side1= side1;
//         this.side2= side2;
//         this.side3= side3;
//     }
//     drawRectangle(){
//         for(let i =0; i<4;i++){
//             super.putPixels(5,7);
//         }
//         console.log("Triangle is drawn");
//     }
// }

// function getShapeObject(diagram,dimensions){
//     if ("Rectangle"== diagram){
//         return new Rectangle(dimensions[0],dimensions[1]);
//     }else if ("Traiangle"== diagram){
//         return new triangle(dimensions[0], dimensions[1],dimensions[2])
//     }
// }

// let diagramName = readLine();
// let dimensions = readLine().split(" ");
// let shapeObject =getShapeObject(diagramName, dimensions);
// shapeObject.drawDiagram();
let count= 0;
class employee {
    number; name; salary; static count = 0;
    constructor(number, name, salary){
        employee.count++;
        this.number = number;
        this.name = name;
        this.salary= salary;
        count++;
    }
    static getEmployeeCountClass(){
        return employee.count;
    }
}
function someFunction(){
    console.log("Total employees are " + employee.count)
}

let e = new employee( "1", "Han", " 500");
let e1 = new employee("2", "Mah", "500");
let e2 = new employee("3", "Das", "500");
let e3 = new employee("4", "Nai", "600");
someFunction(employee.count);
getEmployeeCountClass(employee,count);
console.log(e.getEmployeeCountClass);