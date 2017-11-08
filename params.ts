function details(name:string,age:number,email?:string):void{
    console.log("Name "+name);
    console.log("age "+age);
    if(email!=undefined){
        console.log("email "+email);
    }
}
details("Arindam",29);
details("Arindam",29,"arindam.iphone@gmail.com");

