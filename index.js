var arr = [1,2,34,5,6];
console.log(arr['2'] === arr['02']);
arr['02'] = 90;
arr['t'] = 89;
console.log(arr['02']);
console.log(Object.keys(arr));
console.log(Object.values(arr));