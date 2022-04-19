var digit;
var chance = 5;
var guessed = false;
const correct = document.getElementById('correct');
const wrong = document.getElementById('wrong');
const playAgain = document.getElementById('playAgain');
playAgain.style.display = 'none';
var digitField =  document.getElementById('digit');

function generateDigit(){
    digit = Math.ceil(Math.random()*100);
}

digitField.addEventListener('focus',(e)=>{
    wrong.style.display = "none";
})


function check(){
    var guessedDigit = document.getElementById('digit').value;
    console.log('Guessed: '+guessedDigit+" digit: "+digit);
    if(guessedDigit == digit){
        guessed = true;
        window.alert("You have won the game.")
        // display correct
        wrong.style.display = "none";
        correct.style.display = "block";
        correct.style.color = "green";
        // display play again
        playAgain.style.display = 'block';
        digitField.disabled = true;
        document.getElementById('guess').disabled = true;
    }else{
        // display wrong
        wrong.style.display = "block";
        correct.style.display = "none";
        wrong.style.color = "yellow";
    }
    chance = chance -1;
    document.getElementById('chance').innerText = chance.toString();
    if(chance == 0){
        // show alert
        window.alert("You have lost the game.")
        // display play again
        playAgain.style.display = 'block';
        digitField.disabled = true;
        document.getElementById('guess').disabled = true;
    }
}

function init(){
    generateDigit();
    document.getElementById('chance').innerText = chance.toString();
}

function playagain(){
    // reload page
    location.reload();
}
init();