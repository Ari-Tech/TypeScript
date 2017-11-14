interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
 } 
 
 var employee:IPerson = { 
    firstName:"Jim",
    lastName:"Blakes", 
    sayHi: () =>{return "Hello!!! "+employee.firstName+employee.lastName} 
 } 
   
 console.log("Employee  Object ") 
 console.log(employee.firstName)
  console.log(employee.lastName)
  console.log(employee.sayHi());  
 
  interface Car{
    type:string,
    color:string,
    details:()=>string
  }
  
  var Maruti:Car={
    type:"hashback",
    color:"blue",
    details:()=>{
      return "My car is "+ this.type+" "+Maruti.color
        }
  };
  console.log(Maruti.details());
 
 
  interface RunOptions { 
    program:string; 
    commandline:string[]|string|(()=>string); 
 } 
 
 //commandline as string 
 var options:RunOptions = {
   program:"test1",
   commandline:"Hello"
  }; 
 console.log(options.commandline)  
 
 //commandline as a string array 
 var options:RunOptions = {
   program:"test1",
   commandline:["Hello","World"]
  }; 
 
 console.log(options.commandline[0]); 
 console.log(options.commandline[1]);  
 
 //commandline as a function expression 
 var options:RunOptions = {
   program:"test1",
   commandline:()=>{return "**Hello World**"}
  }; 
