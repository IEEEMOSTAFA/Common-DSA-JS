 const numbers = [1, 5, 3,8, 7, 5];
//  const even = numbers.some((num) => num % 2 === 0)

//  console.log(even);


const currentUserRoles = ["user", "editor"];

const featureAccessRoles = ["admin", "manager"];
// const canAccess = currentUserRoles.some((role) =>featureAccessRoles.includes(role));
// console.log(canAccess);


// const arr = Array.from({length: 5}).fill()
// const arr = Array.from({length: 5},(_,i) => i);
const arr = Array.from([1,2,3],(value,i) => value * value);


// console.log(arr);


const range = (start,stop,step) =>
    Array.from(
        {length: Math.ceil((stop - start) / step)},
        (_,i) => start + i * step
    );

    console.log(range(1,11,2));