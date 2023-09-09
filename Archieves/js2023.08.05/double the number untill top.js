// function topDouble(value, top) {
//     while(true){
//         value *= 2;
//         if (value > top){
//             value /= 2;
//             break;
//         }
//     }
//     console.log(value)
    
// }

// different method

function topDouble(value, top) {
    while (value < top){
        value *= 2;
    }
    return (value/2)
}

console.log(topDouble(3, 100))
