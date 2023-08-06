function isAllX(string) {
    for (let i = 0; i < string.length; i++){
        if (string[i].toLowerCase() == "x"){
            return true;
        }
        else{
            return false;
        }

    }

}

console.log(isAllX("xxXfx"))

module.exports = isAllX;
