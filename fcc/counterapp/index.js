// document.getElementById("count-el").innerHTML = 5

let count = 0
countEl = document.getElementById("count-el")

function incrementfunc(){
    count += 1;
    countEl.innerHTML = count;
}

function decrementfunc(){
    count -= 1;
    countEl.innerHTML = count;
}

function resetfunc(){
    count = 0;
    countEl.innerHTML = count;
}