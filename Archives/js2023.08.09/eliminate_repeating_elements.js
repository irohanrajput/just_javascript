function unique(array) {
    array2 = [];
    for (let i = 0; i < array.length; i++) {
        if (array2.indexOf(array[i]) == -1){
            array2.push(array[i])
        }
        
    }
    return (array2)

}

array = [1,2,3,2,4,4,4,4,4,4,6,3,5,7,1,2,5,6,4]
console.log(unique(array))

module.exports = unique;