interface X{
    profession:string
}
class abc implements X{
    static ssss:string="qwdqwd";
    private name:string
    age:number
    profession:string="SE"
    private dept:string=" wdwdwdf"
    constructor(x:number,y:string){
        this.name=y;
        this.age=x;
    }
    display():void{
        console.log(this.name+" "+this.age+this.profession+this.dept)
    }
}
var o=new abc(29,"A");
o.display();
console.log(abc.ssss)