// const set = new Set();
// set.add("apple");
// set.add("mango");
// set.add("banana");

// console.log(set);
// set.add("apple");
// console.log(set);


// const arr = ["apple", "mango", "banana", "apple", "banana"];
// const set = new Set(arr);
// set.add("pinapple")
// console.log(set.has("tomato"));
// console.log(set.has("apple"));
// console.log(set.delete("apple"));
// console.log(set);

const arr = ["apple", "mango", "banana", "apple", "banana"];
const startTime = performance.now();

const removeDupArr = (Arr) => {
    const newArr = [];
    arr.forEach((element) => {
        if(!newArr.includes(element)){
            newArr.push(element);
        }
    })
    return newArr;
}

console.log(removeDupArr(arr));


const endTime = performance.now();

console.log(`Total consume Time: ${endTime - startTime} ms`)




// console.log(set);
//transform set to array
// const test = Array.from(set);

// test.push("tomato")
// console.log(test);