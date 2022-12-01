/*
The following is an array of 10 students ages:
 const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
 Sort the array and find the min and max age
 Find the median age(one middle item or two middle items divided by two)
 Find the average age(all items divided by number of items)
 Find the range of the ages(max minus min)
 Compare the value of (min - average) and (max - average), use abs() method
*/

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// let x = ages.reduce((prevoiusValue, currentValue) => prevoiusValue + currentValue);
// console.log("Average of age is:", x / 10);

// console.log("Average is:", / 10));

// console.log(ages.sort());

let x = Math.max(...ages);
console.log("Maximum age is:",x);

let y = Math.min(...ages);
console.log("Minimun age is:",y);

console.log(`Range of the age is: ${x - y}`);
