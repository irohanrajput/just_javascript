const person = {
    firstName: "rohan", 
    lastName: 'rajput'
}

const kitchenSink = {
    favNum: 21,
    isFunny: true
}
console.log(person.firstName)

// another method

console.log(person["firstName"])

console.log(kitchenSink.isFunny)

console.log("printing before editing modification")
console.log(kitchenSink)
// modifying objects

kitchenSink.favNum = 22    //modified

kitchenSink.favFood = "chicken"

console.log("printing after editing modification")
console.log(kitchenSink)