//Also known as arrow functions


 var foo=(x:number)=>10+x
console.log(foo(10));

var foo1=([x,y,z])=>{
    console.log(x+y+z);
}
foo1([1,2,3]);

var disp =()=> { 
    console.log("Function invoked"); 
 } 
 disp();

  var display2 = x=> { 
    console.log("The function got "+x) 
 } 
 display2(12)