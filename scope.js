//variable Scope
var globalnum = 101;
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 102;
    }
    Numbers.prototype.calc = function () {
        var localnumn = 104;
    };
    Numbers.num_val1 = 103;
    return Numbers;
}());
console.log(globalnum);
console.log(Numbers.num_val1);
var obj1 = new Numbers();
console.log("Global num: " + obj1.num_val);
