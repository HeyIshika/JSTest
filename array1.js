var fn = function plusOne(n){
    return n + 2;
}
var arr = [1,2,3];
var fn1 = function plusI(n, i) { 
    debugger;
    return n + i; }
fn2 = function greaterThan10(n) { return n > 10; }

var filter = function(arr,fn){
    var iterators = Object.keys(arr);
    var filteredArr = [];
    iterators.forEach(x => {
        if(fn(arr[x],Number(x))){
            filteredArr.push(arr[x]);
        }
        
    });

    return filteredArr;
}

const newArray = filter(arr, fn2);
var map = function(arr,fn){
    var iterators = Object.keys(arr);
    iterators.forEach(x => {
        debugger;
        arr[x] = fn(arr[x], Number(x));
    });
        
    return arr;
}

map(arr,fn1);
console.log(arr[2]);
console.log(newArray);

