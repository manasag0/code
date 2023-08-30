class MyClass{
fill(){
    console.log(this.name+" Fill the Form");
    }
formAccpeted(){
    console.log(this.name+" your is Form Accepted");
}
formRejectd(){
    console.log(this.name+" your Form canclled")
}
name(name,rollNo){
    this.name = name;
    this.rollNo =rollNo;
}
display(){
    console.log(this.name+" this is your "+this.rollNo)
}
}


let Harry = new MyClass('Kuntal')
Harry.name("Harry")
Harry.fill();
let Kuntal = new MyClass()
Kuntal.name("Kuntal")
Kuntal.formAccpeted()
Kuntal
Kuntal.display()