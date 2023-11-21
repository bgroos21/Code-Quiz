(function () {
    var content = document.getElementById("quiz");
    var quest = document.getElementById("quest");
    var result = document.getElementById("result");
    var startButton = document.getElementById("startButton");
    var timer = document.getElementById("timer");
    var timeLeft = 20;
    var startTime = 3;
    var score = document.getElementById("score");
    var currentScore = 0;
    var submitBtn = document.getElementById("submit");
    var txtInitials = document.getElementById("initials");
  
    document.getElementById("highScores").style.visibility = "hidden";
    document.getElementById("save-later-form").style.visibility = "hidden";
    document.getElementById("allInfo").style.visibility = "hidden";
    document.getElementById("score").style.visibility = "hidden";
  
    document.getElementById("allInfo");
    ("click", () => {
      
    });
    
  
    const questions = [
      {
        question: "Which of the following is NOT a JavaScript data type?",
        answers: [
          "a: Number",
          "b: String",
          "c: Array",
          "d: Boolean",
        ],
        correct: "c: Array",
      },
  
      {
        question: "What does HTML stand for?",
        answers: [
          "a: Hyper Text Markup Language",
          "b: Hyper Text Makable Language",
          "c: Hyper Text Mulitable Language",
          "d: Hyper Textual Movable Lovelife",
        ],
        correct: "a: Hyper Text Markup Language",
      },
  
      {
        question: "What does CSS stand For?",
        answers: [
          "a: Computer Science Studies",
          "b: Common Sence Sucks",
          "c: California Sucks Still",
          "d: Cascading Style Sheet",
        ],
        correct: "d: Cascading Style Sheet",
      },
  
      {
        question: "Arrays in Java can be used to store?",
        answers: [
          "a: Booleab", 
          "b: Other Arrays", 
          "c: Numbers", 
          "d: All of the Above",
        ],
        correct: "d: All of the Above",
      },
    ];
  
    var currentQuestionIndex = 0;
  
    function getQuestion() {
      content.textContent = "";
      result.textContent = "";
      var currentQuestion = questions[currentQuestionIndex];
      quest.textContent = currentQuestion.question;
      score.textContent = currentScore;
      timer.textContent = timeLeft;
  
      for (var i = 0; i < currentQuestion.answers.length; i++) {
        var choiceButton = document.createElement("button");
        choiceButton.className = "answerBtn";
        choiceButton.setAttribute("value", currentQuestion.answers[i]);
  
        choiceButton.textContent = currentQuestion.answers[i];
        choiceButton.onclick = choiceSelect;
        content.appendChild(choiceButton);
        document.getElementById("title").style.opacity = 0.2;
      }
      document.getElementById("allInfo").style.visibility = "visible";
    }
  
    function choiceSelect() {
      if (this.value !== questions[currentQuestionIndex].correct) {
        timeLeft -= 3;
      } else {
        currentScore += 3;
      }
  
      currentQuestionIndex++;
      if (currentQuestionIndex === questions.length) {
        gameOver();
      } else {
        getQuestion();
      }
    }
  
    function gameOver() {
      result.textContent = "";
      timer.textContent = "";
      quest.textContent = "GAME OVER!";
  
      content.textContent = "";
  
      score.textContent = "Your score: " + currentScore;
      localStorage.setItem("score", currentScore);
  
      document.getElementById("save-later-form").style.visibility = "visible";
      document.getElementById("title").style.opacity = 1;
      document.getElementById("score").style.visibility = "visible";
    }
  
    function startTimer() {
      var timeInterval = setInterval(function () {
        timer.textContent = timeLeft + " seconds left";
        timeLeft--;
  
        if (timeLeft < 0) {
          $("#timer").hide();
          clearInterval(timeInterval);
          gameOver();
        } else if (currentQuestionIndex === questions.length) {
          timer.content = "";
          clearInterval(timeInterval);
          
          gameOver();
        }
      }, 1000);
    }
  
  
    function shortTimer() {
      var startInterval = setInterval(function () {
        timer.textContent = startTime + " seconds until start";
        startTime--;
        if (startTime >= 0) {
          
        } else if ((startTime = 0)) {
          timer.content = "";
          clearInterval(startInterval);
        }
      }, 1000);
    }
  
    startButton.addEventListener("click", function () {
      content.textContent = "";
      $("#startButton").hide();
      
      
      
      setTimeout(function () {
        startTimer();
        getQuestion();
        
      }, 4000);
      $("#highScoresBtn").hide();
    });
  
    submitBtn.addEventListener("click", function () {
      content.textContent = "";
      $(highScoresBtn).show();
      localStorage.setItem("initsSaved", txtInitials.value);
      showScores();
    });
  
    highScoresBtn.addEventListener("click", function () {
      content.textContent = "";
      $(highScoresBtn).hide();
      showScores();
      document.getElementById("highScores").style.visibility = "visible";
    });
  
    const initials = localStorage.getItem("initsSaved");
    const scoreSaved = localStorage.getItem("score");
  
    function showScores() {
      var inits = document.getElementById("highScoresI");
      var scored = document.getElementById("highScoresS");
      scored.textContent = scoreSaved;
      inits.textContent = initials;
    }
  })();