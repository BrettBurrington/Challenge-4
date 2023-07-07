var questions = [
    {
        question: "The____is the file used to personalize the look and design of your webpage. ",
        options: ["A. index.html", "B. style.css", "C. script.js", "D.style.js"],
        answer: "1"
    },
    {
        question: "You can chose whether or not to link your style.css to you index.HTML files.",
        options: ["A. False", "B. True", ],
        answer: "0"

        
    },
    {
        question: "Which file is used to add interactivity and functionality to a web page?",
        options: ["A. index.html", "B. style.js","C.script.css", "D.script.js" ],
        answer: "3"

        
    }, 
    {
        question: "In Java, the entry point of a program is the __________ method",
        options: ["A. Main", "B. Output","C.Variable", "D.Straight" ],
        answer: "0"

        
    },
    {
        question: "Which of the following is an example of a block-level element in HTML?",
        options: ["A. <span>", "B. <div>","C.<p>", "D.<a>" ],
        answer: "1"

        
    },
  

];
var currentQuestionIndex = 0;
var score = 0;
var time = 100; // Time in seconds
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
    score = 0; 
    time = 100;
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
        message.textContent = "Correct"
    }
    else {
        message.textContent = "Wrong"
        time = time - 10
    }
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        setTimeout(showQuestion, 1000);
    } else {
        setTimeout(endQuiz, 1000);
    }
}

function startTimer() {
    timerElement.textContent = "Time Remaining: " + time;
    timerInterval = setInterval(function () {
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
        initials, score: time
    })
    localStorage.setItem("users", JSON.stringify(users))
}

startButton.addEventListener("click", startQuiz);

function showQuestion() {
    message.textContent = "";
    if (currentQuestionIndex < questions.length) {
        var currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        optionsElement.innerHTML = "";

        for (var i = 0; i < currentQuestion.options.length; i++) {
            var option = currentQuestion.options[i];
            var optionElement = document.createElement("li");
            var button = document.createElement("button");
            button.textContent = option;
            button.setAttribute("data-index", i);
            button.addEventListener("click", selectAnswer);
            optionElement.appendChild(button);
            optionsElement.appendChild(optionElement);
        }
    } else {
        endQuiz();
    }
}