let arr = [43,45,33,1,2,3];
let obj = {1: "rohan", 2: "sam", 3: "meena"};

let arr2 = Object.values(obj).map((item) => {
    return item;
});

console.log(arr2);


let newarr = arr.map((item) => {
    return item;
})

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object(obj));



let