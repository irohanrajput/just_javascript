// // check if the last character in the string is a lower-case x or an upper-case X. Return true if the last character is either lower-case x or upper-case X, false otherwise.


// function endsWithX(string) {
//     //let the no.of last character be "lastChar"
//     lastChar = string.length;
//     lastChar -= 1;
//     if (string[lastChar] == "x"){
//         return true;
//     }
//     else if (string[lastChar] == "X"){
//         return true;
//     }
//     else{
//         return false
//     }
    
// }


// // module.exports = endsWithX;

function endsWithX(string) {
    if(string[string.length - 1].toLowerCase() == "x") {
        return true;
    }
    return false;
}

console.log(endsWithX("dsfdfxX"))


module.exports = endsWithX;