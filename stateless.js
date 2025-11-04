// // State full method:
// const counter = {
//     count: 0,
//     add(amount) {
//         this.count = this.count + amount;
//     },
//     print() {
//         console.log(this.count);
//     },
// };

// counter.add(2);
// counter.add(3);
// counter.print();

// stateless method

let count = 0;
const counter = (amount) =>{
     count = count + amount;
    return count;

}
console.log(counter(3))
console.log(counter(3))