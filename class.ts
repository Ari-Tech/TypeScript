class person {

}
//creating class
class class_name{
    //class scope
}

// Class has three parts:
// fields,
// constructors,
// functions

//Inheritance

class Shape{
    area:number
    constructor(x:number){
        this.area=x
    }
}

class Circle extends Shape{
    display():void{
        console.log("Area is "+this.area)
    }
}

var obj=new Circle(234);
obj.display();