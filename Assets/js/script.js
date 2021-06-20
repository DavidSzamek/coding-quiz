

    const timeLeftDisplay = document.querySelector("#timeLeft")
    const startBtn = document.querySelector("#startQuiz")
    timeLeft = 100 

    function countDown(){
        setInterval(function(){
            if(timeLeft <= 0 ) {
                clearInterval(timeLeft = 0)
            }
            timeLeftDisplay.innerHTML = timeLeft
            timeLeft -=1
        }, 1000)
    }

// Question 1 

    function showQuestion1() {
        document.getElementById("question1").style.display = "block";
        document.getElementById("welcomePage").style.display = "none";
    }

    function correctAnswer() {
        document.getElementById("nextBtn").style.display = "block";
        document.getElementById("correct").style.display = "block";
        
    }

    function incorrectAnswer() {
        document.getElementById("nextBtn").style.display = "block";
        document.getElementById("incorrect").style.display = "block";
        timeLeft = timeLeft - 10;

    }

    

 
    // function disableButtons(){
    //     document.getElementById("q1a").addClass('disabled');
    //     document.getElementById("q1b").addClass('disabled');
    //     document.getElementById("q1c").addClass('disabled');
    //     document.getElementById("q1d").addClass('disabled');
    //     }


// Question 2

    function showQuestion2() {
        document.getElementById("question2").style.display = "block";
        document.getElementById("question1").style.display = "none";
    }

    function correctAnswer1() {
        document.getElementById("nextBtn1").style.display = "block";
        document.getElementById("correct1").style.display = "block";
    }

    function incorrectAnswer1() {
        document.getElementById("nextBtn1").style.display = "block";
        document.getElementById("incorrect1").style.display = "block";
        timeLeft = timeLeft - 10;
    }

// Question 3 

function showQuestion3() {
    document.getElementById("question3").style.display = "block";
    document.getElementById("question2").style.display = "none";
}

function correctAnswer2() {
    document.getElementById("nextBtn2").style.display = "block";
    document.getElementById("correct2").style.display = "block";

}

function incorrectAnswer2() {
    document.getElementById("nextBtn2").style.display = "block";
    document.getElementById("incorrect2").style.display = "block";
    timeLeft = timeLeft - 10;
}

// Score

function showScore() {
    document.getElementById("score").style.display = "block";
    document.getElementById("question3").style.display = "none";
    document.getElementById("finalScore").innerHTML = timeLeft;
}


// insert seconds left into html 

// Start quiz, countdown time & go to Q1 
startQuiz.addEventListener("click", countDown);
startQuiz.addEventListener("click", showQuestion1);

// Go to Q 2 
nextBtn.addEventListener("click", showQuestion2);

// Go to Q3
nextBtn1.addEventListener("click", showQuestion3);

// Go to Score
nextBtn2.addEventListener("click", showScore);
nextBtn2.addEventListener("click", finalScore)



