const user = {
    username: "Rohan",
    price : 999,

    welcomeMessage : function welcomeMessage() {
        console.log(`${this.username}, welcome aboard.`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()


// function chai(){
//     let username = "Rohan"
//     console.log(this.username) works only in objects
// }

// chai()



// -------------------ARROW-----------------

// function fruit1(fruit = "apple") {
//     console.log("this is a fucntion for", fruit)
// }

// fruit2 = function(fruit = "banana") {
//     console.log(`this is a function for ${fruit}`)
// }

// fruit3 = (fruit = "mango") => {
//     console.log(`this is a function for ${fruit}`)
// }


const fruit = () => {
    return(`this is arrow function`)
}

console.log(fruit())

// same fucntion can be written as

const fruit1 = () => (`this is arrow function, implicit return wala system`)


const add = (num1, num2) => (
    num1+num2
)
// we don't need to write "return" keyword when parenthesws are used instead

// or

const addNumbers = (num1, num2) => num1+num2

console.log(addNumbers(2,3))


myArray = [2,5,4,6]

myArray.forEach((element) => {
    console.log(element)
});

myArray.forEach(function(element) {
    console.log(element, "next")
    
});