// const obj = {
//     nextLevel: {courseId: "level_2"},
//     "Programming Hero": {courseId: "level_1"}
// }

// console.log(obj["Programming Hero"]);

const course1 = {name: "Programming Hero"};
const course2 = {name: "Next Level Web Development"};

// const map = new Map();

// map.set(course1, {courseId: "level1"});
// map.set(course2,{courseId:  "level2"});
// console.log(map);
// map.delete(course1);
// console.log(map.has(course2));

// map.forEach((key,value) => console.log("key :",key,"value :",value))


// console.log(map.keys());

// console.log([...map.keys()]);
// console.log([...map.values()]);


// for(let key of map.keys()){
//     console.log(key);
// }

// console.log(map.entries())
// console.log(map.size);



const courses = [["Programming Hero","Level1"], ["Next Level","Level2"]];
const map = new Map(courses);
console.log(map)
