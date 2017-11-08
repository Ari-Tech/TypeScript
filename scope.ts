//variable Scope

var globalnum:number=101;
class Numbers {
    num_val:number =102;
    static num_val1:number=103;
    calc():void {
        var localnumn:number=104;
    }
}

console.log(globalnum);
console.log(Numbers.num_val1);
var obj1=new Numbers();
console.log("Global num: "+obj1.num_val) ;