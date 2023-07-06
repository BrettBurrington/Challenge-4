var questions = [
    {
      question: "Question 1: What is 2 + 2?",
      options: ["A. 69", "B. 4", "C. 1 million", "D. 26"],
      answer: "1"
    },
    {
      question: "Question 2: What is 5 + 3?",
      options: ["A. 20", "B. 6001", "C. 8", "D. 519"],
      answer: "2"
    },
 
  ];
  var currentQuestionIndex = 0;
  var score = 0;
  var time = 60; // Time in seconds
  var timerInterval;
  var message = document.getElementById("message")
  var startButton = document.getElementById("start");
  var quizContainer = document.getElementById("quiz");
  var questionElement = document.getElementById("question");
  var optionsElement = document.getElementById("options");
  var timerElement = document.getElementById("timer");
  var scoreElement = document.getElementById("score");
  var users = []
  function startQuiz() {
    startButton.style.display = "none";
    quizContainer.style.display = "block";
    score = 0; // Reset score
    time = 60; // Reset time
    startTimer();
    showQuestion();
  }
  
  function showQuestion() {
    message.textContent = "";
    if (currentQuestionIndex < questions.length) {
      var currentQuestion = questions[currentQuestionIndex];
      questionElement.textContent = currentQuestion.question;
      optionsElement.innerHTML = "";
  
      for (var i = 0; i < currentQuestion.options.length; i++) {
        var option = currentQuestion.options[i];
        var optionElement = document.createElement("li");
        optionElement.textContent = option;
        optionElement.setAttribute("data-index", i);
        optionElement.addEventListener("click", selectAnswer, false);
        optionsElement.appendChild(optionElement);
      }
    } else {
      endQuiz();
    }
  }
  
  function selectAnswer(event) {
    var selectedOption = event.target;
    var selectedAnswer = selectedOption.getAttribute("data-index");
    var currentQuestion = questions[currentQuestionIndex];
  
    if (selectedAnswer === currentQuestion.answer) {
        message.textContent ="Correct"
    }
  else {
    message.textContent = "Wrong"
    time=time-10
  }
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      setTimeout(showQuestion,1000);
    } else {
     setTimeout(endQuiz,1000);
    }
  }
  
  function startTimer() {
    timerElement.textContent = "Time Remaining: " + time;
    timerInterval = setInterval(function() {
      if (time <= 0) {
        clearInterval(timerInterval);
        endQuiz();
        return;
      }
  
      time--;
      timerElement.textContent = "Time Remaining: " + time;
    }, 1000);
  }
  
  function endQuiz() {
    clearInterval(timerInterval);
    quizContainer.style.display = "none";
    scoreElement.textContent = "Final Score: " + time;
    scoreElement.style.display = "block";
    var initials = prompt("Quiz over! Enter your initials:");
    users.push({
        initials,score:time
    })
   localStorage.setItem("users",JSON.stringify(users))
  }
  
  startButton.addEventListener("click", startQuiz);