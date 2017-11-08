interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
 } 

 var employee:IPerson = { 
    firstName:"Jim",
    lastName:"Blakes", 
    sayHi: ():string =>{return "Hello!!!"} 
 } 
   
 console.log("Employee  Object ") 
 console.log(employee.firstName)
  console.log(employee.lastName)
  console.log(employee.sayHi())
  