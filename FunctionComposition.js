var functions = [x => x+1, x=> x*x , x => x * 4];

var composition = function(functions){
    return function(x) {
        var val = x;
        for(var i = functions.length - 1; i >= 0; i--){
            val = functions[i](val);
        }
        return val;
    }
}
// 
var argumentsLength = function(...args) {
    return args.length;
};
//  Memoized or cached method
//given methods to be cached
var sum = (a,b) => (a+b);
var fib = (n) =>{
    if(n<=1){
        return 1;
    }
    else{
        return fib(n-1) +fib(n-2);
    }
}
var factorial = (n) =>{
    if(n<=1){
        return 1;
    }
    else{
        return factorial(n-1) * n;
    }
}

function memoize(fn) {
    let finalVal;
    return function(...args) {
    }
}
console.log(argumentsLength(1, 2, 3)); // 3
console.log(composition(functions)(2));