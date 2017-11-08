function display(ar:number|string[]){
    if(typeof ar==="number"){
        console.log("number "+ar);
    }else{
        for(var i in ar){
            console.log(ar[i]);
        }
    }
}
display(7);
display(["wd","mm","nn"]);