// Given an array of integers and a number, num, find all the occurrences of the number and remove it from the array.

function removeOccurrences(array, num) {
    for (let i = array.length -1; i >=0; i--){
        if (array[i] == num){
            array.splice(i,1);
        }
    }
    console.log(array)    
}

array = [1,2,3,2,2,2,3,4,5,1]
removeOccurrences(array, 2)

module.exports = removeOccurrences;