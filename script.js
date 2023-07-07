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
var score = 0;// Define variables
var currentQuestionIndex = 0; // Index of the current question
var score = 0; // User's score
var time = 100; // Time in seconds
var timerInterval; // Interval ID for the timer
var message = document.getElementById("message"); // Element to display messages
var startButton = document.getElementById("start"); // Start button element
var quizContainer = document.getElementById("quiz"); // Quiz container element
var questionElement = document.getElementById("question"); // Element to display the question
var optionsElement = document.getElementById("options"); // Element to display the answer options
var timerElement = document.getElementById("timer"); // Element to display the timer
var scoreElement = document.getElementById("score"); // Element to display the final score
var users = []; // Array to store user data

// Function to start the quiz
function startQuiz() {
  startButton.style.display = "none"; // Hide the start button
  quizContainer.style.display = "block"; // Show the quiz container
  score = 0; // Reset the score to 0
  time = 100; // Reset the time to 100 seconds
  startTimer(); // Start the timer
  showQuestion(); // Display the first question
}

// Function to display a question
function showQuestion() {
  message.textContent = ""; // Clear the message
  if (currentQuestionIndex < questions.length) {
    // Check if there are more questions
    var currentQuestion = questions[currentQuestionIndex]; // Get the current question object
    questionElement.textContent = currentQuestion.question; // Display the question

    optionsElement.innerHTML = ""; // Clear the answer options

    // Iterate over the answer options
    for (var i = 0; i < currentQuestion.options.length; i++) {
      var option = currentQuestion.options[i]; // Get an answer option
      var optionElement = document.createElement("li"); // Create a list item element
      var button = document.createElement("button"); // Create a button element
      button.textContent = option; // Set the button text
      button.setAttribute("data-index", i); // Set a data attribute to store the option index
      button.addEventListener("click", selectAnswer); // Add click event listener to the button
      optionElement.appendChild(button); // Append the button to the list item
      optionsElement.appendChild(optionElement); // Append the list item to the options element
    }
  } else {
    endQuiz(); // If there are no more questions, end the quiz
  }
}

// Function to handle the user's answer selection
function selectAnswer(event) {
  var selectedOption = event.target; // Get the selected option button
  var selectedAnswer = selectedOption.getAttribute("data-index"); // Get the selected option index
  var currentQuestion = questions[currentQuestionIndex]; // Get the current question object

  if (selectedAnswer === currentQuestion.answer) {
    // Check if the selected option is correct
    message.textContent = "Correct"; // Display a correct message
  } else {
    message.textContent = "Wrong"; // Display a wrong message
    time = time - 10; // Decrease the remaining time by 10 seconds
  }

  currentQuestionIndex++; // Move to the next question

  if (currentQuestionIndex < questions.length) {
    // If there are more questions, display the next question after a delay
    setTimeout(showQuestion, 1000);
  } else {
    setTimeout(endQuiz, 1000); // If there are no more questions, end the quiz after a delay
  }
}

// Function to start the timer
function startTimer() {
  timerElement.textContent = "Time Remaining: " + time; // Display the initial time

  timerInterval = setInterval(function () {
    // Start the timer interval
    if (time <= 0) {
      clearInterval(timerInterval); // If time runs out, clear the timer interval
      endQuiz(); // End the quiz
      return;
    }

    time--; // Decrease the remaining time by 1 second
    timerElement.textContent = "Time Remaining: " + time; // Update the timer display
  }, 1000);
}

// Function to end the quiz
function endQuiz() {
  clearInterval(timerInterval); // Clear the timer interval
  quizContainer.style.display = "none"; // Hide the quiz container
  scoreElement.textContent = "Final Score: " + time; // Display the final score
  scoreElement.style.display = "block"; // Show the final score element
  var initials = prompt("Quiz over! Enter your initials:"); // Prompt the user for their initials
  users.push({ initials, score: time }); // Store the user's initials and score in the users array
  localStorage.setItem("users", JSON.stringify(users)); // Store the users array in local storage
}

// Add click event listener to the start button
startButton.addEventListener("click", startQuiz);

// Function to display a question
function showQuestion() {
  message.textContent = ""; // Clear the message
  if (currentQuestionIndex < questions.length) {
    // Check if there are more questions
    var currentQuestion = questions[currentQuestionIndex]; // Get the current question object
    questionElement.textContent = currentQuestion.question; // Display the question

    optionsElement.innerHTML = ""; // Clear the answer options

    // Iterate over the answer options
    for (var i = 0; i < currentQuestion.options.length; i++) {
      var option = currentQuestion.options[i]; // Get an answer option
      var optionElement = document.createElement("li"); // Create a list item element
      var button = document.createElement("button"); // Create a button element
      button.textContent = option; // Set the button text
      button.setAttribute("data-index", i); // Set a data attribute to store the option index
      button.addEventListener("click", selectAnswer); // Add click event listener to the button
      optionElement.appendChild(button); // Append the button to the list item
      optionsElement.appendChild(optionElement); // Append the list item to the options element
    }
  } else {
    endQuiz(); // If there are no more questions, end the quiz
  }
}// Define variables
var currentQuestionIndex = 0; // Index of the current question
var score = 0; // User's score
var time = 100; // Time in seconds
var timerInterval; // Interval ID for the timer
var message = document.getElementById("message"); // Element to display messages
var startButton = document.getElementById("start"); // Start button element
var quizContainer = document.getElementById("quiz"); // Quiz container element
var questionElement = document.getElementById("question"); // Element to display the question
var optionsElement = document.getElementById("options"); // Element to display the answer options
var timerElement = document.getElementById("timer"); // Element to display the timer
var scoreElement = document.getElementById("score"); // Element to display the final score
var users = []; // Array to store user data

// Function to start the quiz
function startQuiz() {
  startButton.style.display = "none"; // Hide the start button
  quizContainer.style.display = "block"; // Show the quiz container
  score = 0; // Reset the score to 0
  time = 100; // Reset the time to 100 seconds
  startTimer(); // Start the timer
  showQuestion(); // Display the first question
}

// Function to display a question
function showQuestion() {
  message.textContent = ""; // Clear the message
  if (currentQuestionIndex < questions.length) {
    // Check if there are more questions
    var currentQuestion = questions[currentQuestionIndex]; // Get the current question object
    questionElement.textContent = currentQuestion.question; // Display the question

    optionsElement.innerHTML = ""; // Clear the answer options

    // Iterate over the answer options
    for (var i = 0; i < currentQuestion.options.length; i++) {
      var option = currentQuestion.options[i]; // Get an answer option
      var optionElement = document.createElement("li"); // Create a list item element
      var button = document.createElement("button"); // Create a button element
      button.textContent = option; // Set the button text
      button.setAttribute("data-index", i); // Set a data attribute to store the option index
      button.addEventListener("click", selectAnswer); // Add click event listener to the button
      optionElement.appendChild(button); // Append the button to the list item
      optionsElement.appendChild(optionElement); // Append the list item to the options element
    }
  } else {
    endQuiz(); // If there are no more questions, end the quiz
  }
}

// Function to handle the user's answer selection
function selectAnswer(event) {
  var selectedOption = event.target; // Get the selected option button
  var selectedAnswer = selectedOption.getAttribute("data-index"); // Get the selected option index
  var currentQuestion = questions[currentQuestionIndex]; // Get the current question object

  if (selectedAnswer === currentQuestion.answer) {
    // Check if the selected option is correct
    message.textContent = "Correct"; // Display a correct message
  } else {
    message.textContent = "Wrong"; // Display a wrong message
    time = time - 10; // Decrease the remaining time by 10 seconds
  }

  currentQuestionIndex++; // Move to the next question

  if (currentQuestionIndex < questions.length) {
    // If there are more questions, display the next question after a delay
    setTimeout(showQuestion, 1000);
  } else {
    setTimeout(endQuiz, 1000); // If there are no more questions, end the quiz after a delay
  }
}

// Function to start the timer
function startTimer() {
  timerElement.textContent = "Time Remaining: " + time; // Display the initial time

  timerInterval = setInterval(function () {
    // Start the timer interval
    if (time <= 0) {
      clearInterval(timerInterval); // If time runs out, clear the timer interval
      endQuiz(); // End the quiz
      return;
    }

    time--; // Decrease the remaining time by 1 second
    timerElement.textContent = "Time Remaining: " + time; // Update the timer display
  }, 1000);
}

// Function to end the quiz
function endQuiz() {
  clearInterval(timerInterval); // Clear the timer interval
  quizContainer.style.display = "none"; // Hide the quiz container
  scoreElement.textContent = "Final Score: " + time; // Display the final score
  scoreElement.style.display = "block"; // Show the final score element
  var initials = prompt("Quiz over! Enter your initials:"); // Prompt the user for their initials
  users.push({ initials, score: time }); // Store the user's initials and score in the users array
  localStorage.setItem("users", JSON.stringify(users)); // Store the users array in local storage
}

// Add click event listener to the start button
startButton.addEventListener("click", startQuiz);

// Function to display a question
function showQuestion() {
  message.textContent = ""; // Clear the message
  if (currentQuestionIndex < questions.length) {
    // Check if there are more questions
    var currentQuestion = questions[currentQuestionIndex]; // Get the current question object
    questionElement.textContent = currentQuestion.question; // Display the question

    optionsElement.innerHTML = ""; // Clear the answer options

    // Iterate over the answer options
    for (var i = 0; i < currentQuestion.options.length; i++) {
      var option = currentQuestion.options[i]; // Get an answer option
      var optionElement = document.createElement("li"); // Create a list item element
      var button = document.createElement("button"); // Create a button element
      button.textContent = option; // Set the button text
      button.setAttribute("data-index", i); // Set a data attribute to store the option index
      button.addEventListener("click", selectAnswer); // Add click event listener to the button
      optionElement.appendChild(button); // Append the button to the list item
      optionsElement.appendChild(optionElement); // Append the list item to the options element
    }
  } else {
    endQuiz(); // If there are no more questions, end the quiz
  }
}
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