const firstArray = [];
const secondArray = [];
// console.time("task");
for(let i = 0; i < 600000; i++){
if(i <= 300000){
    firstArray.push(i)
}
secondArray.push(i);
}

console.log("Length of firstArray:",firstArray.length);
console.log("Length of secondArray:",secondArray.length);

// console.time("map1");
const firstArrayList = firstArray.map((number) =>({userId: number}));
// console.timeEnd("map1");


// console.time("map2");
const secondArrayList = secondArray.map((number) => ({userId: number}));
// console.timeEnd("map2");

console.time("find");
// const user = secondArrayList.find((user) => (user.userId === 20000))

const user = secondArrayList[90000];
console.timeEnd("find");

//  console.timeEnd("task");