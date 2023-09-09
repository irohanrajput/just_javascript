// function greaterThanFive(array) {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] <= 5) {
//             array.splice(i, 1);
//         }
//     }
//     console.log(array)
    
// }

// above code is wrong because, When we splice an element from the array, the length of the array changes, which can lead to unexpected behavior in the loop. Elements might be skipped or processed incorrectly. To avoid this issue, you should iterate through the array in reverse order, starting from the last element and moving towards the first element. This ensures that splicing elements doesn't affect the iteration process

function greaterThanFive(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] <= 5) {
            array.splice(i, 1);
        }
    }
    console.log(array)
}

array = [1, 2, 3,8, 4, 5, 6,7,8,3,9]
greaterThanFive(array)

module.exports = greaterThanFive;