const goButton = document.getElementById('go-btn');
const randomNumber = Math.floor(Math.random()*100 + 1);

goButton.addEventListener('click', () => {
    const userInput = parseInt(document.getElementById('user-input').value)
    if (userInput == randomNumber){
        alert("okay");
    } else if (userInput > randomNumber) {
        alert("You guessed a bigger number. Try a smaller one!");
    } else if (userInput < randomNumber) {
        alert("You guessed a smaller number. Try a bigger one!");
    } else if (!userInput){
        alert("enter a number first")
    }

});


