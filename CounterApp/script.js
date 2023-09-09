const mainTitle = document.querySelector('#title');
let curVal = 0;

const btnDecrement = document.querySelector('#decrement');
const btnReset = document.querySelector('#reset');
const btnIncrement = document.querySelector('#increment');

btnIncrement.addEventListener('click', ()=>{
    curVal++ ;
    mainTitle.textContent = curVal;
});

btnDecrement.addEventListener('click', ()=>{
    curVal-- ;
    mainTitle.textContent = curVal;
});

btnReset.addEventListener('click', ()=>{
    curVal = 0;
    mainTitle.textContent = curVal;
});