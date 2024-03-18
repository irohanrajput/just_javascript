"use strict";

// let score = "33" but what if
 let score = "43af"

console.log(typeof(score))


score = Number(score)
console.log(typeof(score))
console.log(score)


//"33" => 33
// "33abc" => NaN
// etc

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof(booleanIsLoggedIn))


// basic this was all about conversions of datatypes, but we need to keep in mind about invalid outputs because JS doesn't throw an error while contverting aplphabets into integers, it just gives 'NaN', no strict checking, so don't sleep.



// operations