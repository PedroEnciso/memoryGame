
let numberOfClicks = 0;
let firstChoice, secondChoice;
let firstChoiceColor, secondChoiceColor
let score = 0;
let failedAttempts = 0;


/*
document.addEventListener('click', function(clickedBox) {
    clickedBox.target.style.opacity = "0";

    if (numberofClicks = 0) {firstChoice = clickedBox.target.innerHTML;}

    console.log(firstChoice);



})
*/

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

function checkIfElementsAreEqual() {
    if(firstChoiceColor === secondChoiceColor) {
        setTimeout(function() {
            score++;
            alert('yes');
        },750)
    }
    else {
        setTimeout(function() {
            failedAttempts++;
            alert('no');
        },750)
        
    }
}