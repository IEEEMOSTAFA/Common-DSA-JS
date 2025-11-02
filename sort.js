const numbers = [40, 100, 1, 5, 25, 10];
const fruits = ["Banana", "apple", "Cherry", "date"];

const sortedNumber = numbers.sort((a,b) => a - b);
// console.log(sortedNumber);

const sortedFruits = fruits.sort((a,b) => a.localeCompare(b));
// console.log(sortedFruits);
// const arr = [1, 2, 3, [4, 5,[6,7]]];
// const flatArr = arr.flat(2);
// console.log(flatArr);


// Nested array flat

 const arr = [1, 2, 3, [4, 5, [6, 7, [8, 9, [10, 11]]]]];
// const flatArr = arr.flat(4);
// More easy wary
const flatArr = arr.flat(Infinity);
// console.log(flatArr);


const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];
const filterFlag = new Set(tagsFromPosts.flat()); 
console.log(filterFlag);