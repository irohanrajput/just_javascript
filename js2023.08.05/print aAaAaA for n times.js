function scream(n){
    let str = "";
    for (let i = 1; i <= n; i++) {
        if (i % 2 != 0){
            str += "a";
        }
        else{
            str += "A";
        }

    }
    console.log((str))
}

scream(4)