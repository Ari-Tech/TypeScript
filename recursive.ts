function factorial(n:number){
    if(n<=0){
        return 1;
    }else{
        return (n*factorial(n-1));
    }
}
console.log(factorial(3))