
let numberOfClicks = 0;
let firstChoice, secondChoice;
let firstChoiceColor, secondChoiceColor
let score = 0;
let failedAttempts = 0;

function flipTile(clickedTileId) {
    if (numberOfClicks == 0) {
        //flips the tile
        firstChoice = document.getElementById(clickedTileId);
        firstChoice.style.opacity = '0';
        numberOfClicks++;

        //get the id of the revealed tile
        firstChoiceColor = clickedTileId.substring(6, 11);
        firstChoiceColor = getTileColor(firstChoiceColor);
        return;
    }
    else {
        secondChoice = document.getElementById(clickedTileId);
        secondChoice.style.opacity = '0';
        numberOfClicks = 0;

        secondChoiceColor = clickedTileId.substring(6, 11);
        secondChoiceColor = getTileColor(secondChoiceColor);
    }

    checkIfElementsAreEqual();
}

function getTileColor(tileId) {
    tile = document.getElementById(tileId);
    tileStyle = getComputedStyle(tile);
    tileColor = tileStyle.background;
    return tileColor;
}


let attemptsHtml = document.getElementById("attempts");
let scoreHtml = document.getElementById('score');

function checkIfElementsAreEqual() {
    if(firstChoiceColor === secondChoiceColor) {
        setTimeout(function() {
            score++;
            scoreHtml.innerHTML = score;
            if (score == 3) {
                alert("You won the game! \nRefresh to play again.")
            }
        },750)
    }
    else {
        setTimeout(function() {
            failedAttempts++;
            alert('Sorry, these tiles do not match!');
            firstChoice.style.opacity = '1';
            secondChoice.style.opacity = '1';
            attemptsHtml.innerHTML = failedAttempts;
        },750)
        
    }
}