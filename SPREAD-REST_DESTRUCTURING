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

////////////////////////////////////
//Destructuring Assignment
////////////////////////////////////
/*Use Destructuring Assignment to Extract Values from Objects*/

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

//const today = HIGH_TEMPERATURES.today;
//const tomorrow = HIGH_TEMPERATURES.tomorrow;
const {today, tomorrow} = HIGH_TEMPERATURES;

//-------------------------------------------------------------------
/*Use Destructuring Assignment to Assign Variables from Objects*/

//const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow; 
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES

console.log(highToday, highTomorrow)

//-------------------------------------------------------------------
/*Use Destructuring Assignment to Assign Variables from Nested Objects*/

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

//const lowToday = LOCAL_FORECAST.today.low;
//const highToday = LOCAL_FORECAST.today.high;

const {today: {low: lowToday,high: highToday}} = LOCAL_FORECAST

console.log(lowToday,highToday)
