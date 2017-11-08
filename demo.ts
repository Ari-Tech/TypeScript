// var name1:string="Arindam";
// var age:number=29;
// console.log(name1+" "+age);


class Greeting { 
    greet():void { 
       console.log("Hello World!!!") 
    } 
 } 
 var obj = new Greeting(); 
 obj.greet();

 //Type Assertion
 var abc1:string="2";
 var def1:number = <number> <any> abc1;
console.log(def1*2);

//Inferred Typing in TypeScript
var num = 2;    // data type inferred as  number 
console.log("value of num "+num); 
num = "12";
console.log(num); // cause error

var x:number=11;
var y:String="wdwd"+x;
console.log(y);


