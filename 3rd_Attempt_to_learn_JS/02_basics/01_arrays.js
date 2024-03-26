//almost same as list in python

const myArr = [0, 3 ,"rohan", {"rohan": "rajput"}]

console.log(myArr.length)


for (let i = 0; i< myArr.length; i++){
    console.log(myArr[i])
}


// array methods

myArr.push("new value") //same as append
myArr.pop("new value") //to delete

newArr = [1,3,2,4,6]


newArr = myArr.join() 
// adds all the elements in the array into in the form of string

console.log(newArr)