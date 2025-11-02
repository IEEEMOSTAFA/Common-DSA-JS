
// Set implementation:
// const startTime = Performance.now()
const startTime = performance.now();
const arr = ["apple", "mango", "banana", "apple", "banana"];

const removeDupSet = (arr) => {
    const set = new Set(arr);

    return Array.from(set);
}


console.log(removeDupSet(arr));
const endTime = performance.now();
console.log(`Total consume time: ${endTime - startTime} ms`);