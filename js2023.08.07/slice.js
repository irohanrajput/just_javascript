// First, you'll need to find the lower-case x.
// Once you've found the x, split the string in half. The first half will be  the string before the x, the second half will be the string after the x.
// Take the longer string and return it!


function splitAtX(string) {
    no = string.indexOf("x");
    if (no < (string.length - 1) / 2) {
        return string.slice(no + 1);
    }
    else if (no > (string.length - 1) / 2) {
        return string.slice(0, no);
    }

}

module.exports = splitAtX;



// better method

// function splitAtX(string) {
//     const index = string.indexOf('x');
//     const a = string.slice(0,index);
//     const b = string.slice(index+1);
//     return (a.length > b.length) ? a : b;
// }

// module.exports = splitAtX;