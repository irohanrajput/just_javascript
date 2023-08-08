// create a function hasOne which takes in an array of numbers. Return true if any of the numbers in the array are 1. Return false if not.

function hasOne(array) {
    for (let i = 0; i < array.length; i++){
        if (array[i] == 1){
            return true;
        }
    }
    return false;
}

const array = [2,3];

console.log(hasOne(array))

module.exports = hasOne;