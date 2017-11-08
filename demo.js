// var name1:string="Arindam";
// var age:number=29;
// console.log(name1+" "+age);
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World!!!");
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
//Type Assertion
var abc1 = "2";
var def1 = abc1;
console.log(def1 * 2);
//Inferred Typing in TypeScript
var num = 2; // data type inferred as  number 
console.log("value of num " + num);
num = "12";
console.log(num); // cause error
var x = 11;
var y = "wdwd" + x;
console.log(y);
