// retrieve localStorage and push to li element
var userHighscore 
var retrievedData

retrievedData = localStorage.getItem("highscore");
userHighscore = JSON.parse(retrievedData)
console.log(userHighscore);

document.getElementById("userScore3").innerHTML += " " + userHighscore.initials + " " + userHighscore.score;
