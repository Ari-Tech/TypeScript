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

class ParentClass {
    display():void{
        console.log("Parent function")
    }
}
class ChildClass extends ParentClass{
    display():void{
        super.display()
        console.log("Child function")
    }
}

var objectclass:ChildClass= new ChildClass();
objectclass.display()

class encapsulate{
    private name:string;
    age:number
    constructor(nameStr){
        this.name=nameStr;
    }
    display():void{
        console.log(this.name+ " "+this.age);
    }
}

var o=new encapsulate("My Name");
o.age=29;
//o.name="wdwdw"; --cannot be done
o.display();

//Class and Interface
interface Person{
    name:string
}

class InterImpl implements Person{
    age:number
    name:string  // compulsary
    constructor(a:number, n:string){
        this.age=a
        this.name=n
    }
    display():void{
        console.log(this.name+ " "+this.age);
    }
}
var oo=new InterImpl(29,"Arin");

oo.display();


