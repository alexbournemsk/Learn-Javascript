//////////////////
//Spread operator
//////////////////
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2); ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];

//////////////////
//Rest parameter
//////////////////

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1,2,3,4,5))
