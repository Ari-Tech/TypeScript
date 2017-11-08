var ar = [1, 2, 3];
var arr = new Array(4);
for (var i = 0; i < arr.length; i++) {
    arr[i] = i * 2;
    console.log(arr[i]);
}
//Array Destruction
var arrr = [1, 2, 3];
var x = arrr[0], y = arrr[1], z = arrr[2];
console.log(x, y, z);
