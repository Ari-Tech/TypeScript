//Also known as arrow functions
var foo = function (x) { return 10 + x; };
console.log(foo(10));
var foo1 = function (_a) {
    var x = _a[0], y = _a[1], z = _a[2];
    console.log(x + y + z);
};
foo1([1, 2, 3]);
var disp = function () {
    console.log("Function invoked");
};
disp();
var display2 = function (x) {
    console.log("The function got " + x);
};
display2(12);
