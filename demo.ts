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
 var abc:string="2";
 var def:number = <number> <any> abc;
console.log(def);

//Inferred Typing in TypeScript
var num = 2;    // data type inferred as  number 
console.log("value of num "+num); 
num = "12";
console.log(num); // cause error



}

