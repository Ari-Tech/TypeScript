var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () { return "Hello!!! " + employee.firstName + employee.lastName; }
};
console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHi());
var Maruti = {
    type: "hashback",
    color: "blue",
    details: function () {
        return "My car is " + Maruti.type + " " + Maruti.color;
    }
};
console.log(Maruti.details());
//commandline as string 
var options = {
    program: "test1",
    commandline: "Hello"
};
console.log(options.commandline);
//commandline as a string array 
var options = {
    program: "test1",
    commandline: ["Hello", "World"]
};
console.log(options.commandline[0]);
console.log(options.commandline[1]);
//commandline as a function expression 
var options = {
    program: "test1",
    commandline: function () { return "**Hello World**"; }
};
var fn = options.commandline;
console.log(fn());
;
;
var engineering = {
    name: "NCS",
    id: "NCS-PE-Team"
};
console.log(engineering.id);
var eng = {};
eng["id"] = "EDistr-PE";
eng["name"] = "UOB";
console.log(eng.id);
