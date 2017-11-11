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
      return "My car is "+ Maruti.type+" "+Maruti.color
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
 
 var fn:any = options.commandline; 
 console.log(fn());

 // inheritance with Interface

 interface Company{
  name:string
 };


 interface division extends Company {
   id: string
 };

 var engineering:division={
  name:"NCS",
  id: "NCS-PE-Team",
 };
 console.log(engineering.id);

 var eng=<division>{};
 eng["id"]="EDistr-PE";
 eng["name"]="UOB";
 console.log(eng.id);
 
 interface vehicle{
  type:string
 }
 interface twowheeler{
  horsepower:number
 }

 interface bike extends twowheeler,vehicle{
   color:string
 }
 //var bugati=<bike>{} also works

var bugati:bike={
  type:"Bike",
  horsepower:275,
  color:"blu-white"
}
console.log(bugati.color);
