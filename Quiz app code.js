// Quiz data
const quizData = {
  HTML: [
    //HTML qusetions starts from here
    {
      //First question
      question: "HTML stands for",
      options: {
        A: "Hyper tile Makeup Language",
        B: "Hyper text Markup Language",
        C: "Hype tole Makeup Language",
        D: "Hypo text Makeup Language",
      },
      correctAnswer: "B",
    },
    {
      //second question
      question: " How many sizes of headers are available in HTML by default ?",
      options: {
        A: "5",
        B: "2",
        C: "3",
        D: "6",
      },
      correctAnswer: "D",
    },
    {
      //third question
      question: " What is the smallest header in HTML by default ?",
      options: {
        A: "h1",
        B: "h2",
        C: "h6",
        D: "h4",
      },
      correctAnswer: "C",
    },
    {
      //Fourth question
      question: " What are the types of lists available in HTML ?",
      options: {
        A: "Ordered, Unordered Lists",
        B: "Bulleted, Numbered Lists",
        C: "Named, Unnamed Lists",
        D: "None of the above",
      },
      correctAnswer: "A",
    },
    {
      //fifth question
      question: "How to create an ordered list in HTML ?",
      options: {
        A: "ul tag",
        B: "ol tag",
        C: "herf ",
        D: "hr tag",
      },
      correctAnswer: "B",
    },
    {
      //sixth question
      question: "HTML files are saved by default with the extension ?",
      options: {
        A: ".h",
        B: ".ht",
        C: ".css",
        D: ".html",
      },
      correctAnswer: "D",
    },
    {
      //seventh question
      question: "We enclose HTML tags within ?",
      options: {
        A: "{}",
        B: "!!",
        C: "<>",
        D: "[]",
      },
      correctAnswer: "C",
    },
    {
      //Eighth question
      question: "What is the effect of the 'b' tag ?",
      options: {
        A: "It converts the text within it to bold font",
        B: "It is used to write black-colored font",
        C: "It is used to change the font size",
        D: "All of the above",
      },
      correctAnswer: "A",
    },
    {
      //ninth question
      question: "Which of the following tags doesn't require a closing tag ?",
      options: {
        A: "br tag",
        B: "hr tag",
        C: "Both A and B",
        D: "None of the above",
      },
      correctAnswer: "C",
    },
    {
      //tenth question
      question: "What are the attributes used to change the size of an image ?",
      options: {
        A: "Big and Small",
        B: "Top and Bottom",
        C: "Increase and Reduce",
        D: "Width and height",
      },
      correctAnswer: "D",
    },
    //  the HTML category question ends here
  ],
  //CSS questions start
  CSS: [
    {
      //1st question
      question: "The full form of CSS is ?",
      options: {
        A: "Cascoding style sheets",
        B: "colored style sheets",
        C: "Cascading style sheets",
        D: "None of the above",
      },
      correctAnswer: "C",
    },
    {
      //2nd question
      question:
        " Which of the following tag is used to embed css in html page?",
      options: {
        A: "css tag",
        B: "!DOCTYPE html tag",
        C: " script tag",
        D: "style tag",
      },
      correctAnswer: "D",
    },
    {
      //3rd question
      question:
        " Which of the following CSS selectors are used to specify a group of elements?",
      options: {
        A: "tag",
        B: "id",
        C: "class",
        D: "both class and tag",
      },
      correctAnswer: "C",
    },
    {
      //4th question
      question:
        " Which of the following has introduced text, list, box, margin, border, color, and background properties?",
      options: {
        A: "HTML",
        B: "CSS",
        C: "PHP",
        D: "Ajax",
      },
      correctAnswer: "B",
    },
    {
      //5th question
      question:
        " Which of the following CSS framework is used to create a responsive design?",
      options: {
        A: "django",
        B: "rails",
        C: "larawell",
        D: "bootstrap",
      },
      correctAnswer: "D",
    },
    {
      //6th question
      question:
        " Which of the following CSS selector is used to specify a rule to bind a particular unique element?",
      options: {
        A: "tag",
        B: "id",
        C: "class",
        D: "both a and c",
      },
      correctAnswer: "B",
    },
    {
      //7th question
      question:
        "Which of the following CSS property is used to make the text bold?",
      options: {
        A: "text-decoration: bold",
        B: "font-weight: bold",
        C: "font-style: bold",
        D: "text-align: bold",
      },
      correctAnswer: "B",
    },
    {
      //8th question
      question:
        "Which of the following CSS style property is used to specify an italic text?",
      options: {
        A: "style",
        B: "font",
        C: "font-style",
        D: "@font-face",
      },
      correctAnswer: "C",
    },
    {
      //9th question
      question:
        "Which of the following function defines a linear gradient as a CSS image?",
      options: {
        A: "gradient()",
        B: " linear-gradient()",
        C: " grayscale()",
        D: " image()",
      },
      correctAnswer: "B",
    },
    {
      //10th question
      question:
        " Which of the following CSS property can be used to set the image as a border instead of the border style?",
      options: {
        A: "background-image-source",
        B: "background-image-source",
        C: "border-image-source",
        D: "border-image",
      },
      correctAnswer: "C",
    },
    //CSS questions end
  ],
  Javascript: [
    // question reelated to Javascript topic is strted
    {
      //1st qusetion
      question:
        "-----is a high-level scripting language that is synchronous with client-side scripting",
      options: {
        A: "java script",
        B: "php",
        C: "oracle",
        D: "None of these",
      },
      correctAnswer: "A",
    },
    {
      //2nd
      question:
        "----- a versatile language of the front-end that is mainly used to make web pages interactive and dynamic",
      options: {
        A: "javascript",
        B: "php",
        C: "oracle",
        D: "All of these",
      },
      correctAnswer: "A",
    },
    {
      //3rd
      question:
        "In HTML, JavaScript code is inserted betweent-----and </script> tags",
      options: {
        A: "VER",
        B: "script",
        C: "TITLE",
        D: "None of these",
      },
      correctAnswer: "B",
    },
    {
      //4th
      question:
        "To access an HTML element, JavaScript can use the------method.",
      options: {
        A: "document.getElementById('id')",
        B: "CONSOLE",
        C: "COUT",
        D: "None of this",
      },
      correctAnswer: "A",
    },
    {
      //5th
      question: "--------Is used to show the out put or give message",
      options: {
        A: " COUT",
        B: " printf",
        C: "document.write():",
        D: "All of these",
      },
      correctAnswer: "C",
    },
    {
      //6th
      question:
        "For debugging purposes, you can call the ----method in the browser to display data.",
      options: {
        A: " document.write():",
        B: " console.log()",
        C: "COUT()",
        D: "var",
      },
      correctAnswer: "B",
    },
    {
      //7th
      question:
        "-------it is assignment operator is used to assign value from right hand side to left hand side .",
      options: {
        A: "Const",
        B: "document.write():",
        C: "=",
        D: "None of these",
      },
      correctAnswer: "C",
    },
    {
      //8th
      question: "------it is assignment operator is used to not equal value.",
      options: {
        A: ">",
        B: "!==",
        C: "!!",
        D: "=",
      },
      correctAnswer: "B",
    },
    {
      //9th
      question: "The 'function' and ' var' are known as",
      options: {
        A: "Data Types",
        B: "Declaration Statements",
        C: "Prototypes",
        D: "Keywords",
      },
      correctAnswer: "D",
    },
    {
      //10th
      question: "Which type of JavaScript language is ___",
      options: {
        A: "Object-Oriented",
        B: "Object-Based",
        C: "Assembly-language",
        D: "High-level",
      },
      correctAnswer: "B",
    },
    // Javascript question ends
  ],
  DSA: [
    // question related to DSA starts
    {
      //question 1
      question: "What is a data structure?",
      options: {
        A: "A programming language",
        B: "A collection of algorithms",
        C: "A way to store and organize data",
        D: "A type of computer hardware",
      },
      correctAnswer: "C",
    },
    {
      //question 2
      question: "Which data structure is used for implementing recursion?",
      options: {
        A: "Stack",
        B: "Queue",
        C: " List",
        D: "Array",
      },
      correctAnswer: "A",
    },
    {
      //question 3
      question:
        " The data structure required to check whether an expression contains a balanced parenthesis is?",
      options: {
        A: "Queue",
        B: "Stack",
        C: "Tree",
        D: "Array",
      },
      correctAnswer: "B",
    },
    {
      //question 4
      question:
        " Which data structure is needed to convert infix notation to postfix notation?",
      options: {
        A: "Tree",
        B: "Branch",
        C: "Stack",
        D: "Queue",
      },
      correctAnswer: "C",
    },
    {
      //question 5
      question: "  The prefix form of A-B/ (C * D ^ E) is?",
      options: {
        A: "-A/B*C^DE",
        B: "-A/BC*^DE",
        C: "-ABCD*^DE",
        D: "-/*^ACBDE",
      },
      correctAnswer: "A",
    },
    {
      //question 6
      question:
        " Which of the following tree data structures is not a balanced binary tree?",
      options: {
        A: "Splay tree",
        B: "B-tree",
        C: "AVL tree",
        D: "Red-black tree",
      },
      correctAnswer: "B",
    },
    {
      //question 7
      question: " Which of the following is not the type of queue?",
      options: {
        A: "Priority queue",
        B: "Circular queue",
        C: "Single ended queue",
        D: "Ordinary queue",
      },
      correctAnswer: "C",
    },
    {
      //question 8
      question:
        "Which of the following data structures can be used for parentheses matching?",
      options: {
        A: "n-ary tree",
        B: "queue",
        C: "priority queue",
        D: "stack",
      },
      correctAnswer: "D",
    },
    {
      //question 9
      question: "Which of the following is also known as Rope data structure?",
      options: {
        A: "Linked List",
        B: "Array",
        C: " String",
        D: "Cord",
      },
      correctAnswer: "D",
    },
    {
      //question 10
      question:
        " The optimal data structure used to solve Tower of Hanoi is _________",
      options: {
        A: "Tree",
        B: "Heap",
        C: "Priority Queue",
        D: "Stack",
      },
      correctAnswer: "D",
    },
    // Quiz end here
  ],
};

// Current quiz state
let currentCategory = "";
let currentQuestionIndex = 0;
let score = 0;
let startTime;
let attemptedQuestionsCount = 0;

// Start Quiz function
function startQuiz() {
  const userName = document.getElementById("userName").value;
  if (!userName) {
    alert("Please enter your name .");
    return;
  }

  document.getElementById("resultName").textContent = userName;
  alert("Please select category to start QUIZ .");
  return;
}

// Start Timer
let countdown = 100; // Initial countdown value

function startTimer() {
  startTime = new Date().getTime();
  timerInterval = setInterval(updateTimer, 1000); //It help to Update timer every second
}

function updateTimer() {
  if (countdown >= 0) {
    document.getElementById(
      "timer"
    ).textContent = `Timer: ${countdown} seconds`; // Update timer display
    countdown--; // Decrease countdown by 1 second
  } else {
    clearInterval(timerInterval); // Stop timer when countdown reaches 0
    endQuiz(); // End quiz when timer runs out
  }
}

// Load Questions
function loadQuestion(category) {
  const questionContainer = document.getElementById("questionContainer");
  questionContainer.innerHTML = "";
  const question = quizData[category][currentQuestionIndex];
  const questionElement = document.createElement("div");
  questionElement.innerHTML = `
  <h2 class="catagoryTitle" style="text-align: center;">Category: ${category}</h2><br><hr><br>
  <h3 class="QuestionSerial">Question ${currentQuestionIndex + 1}:</h3>
  <p class="Questions">${question.question}</p>
  <button class="ansOptions" onclick="checkAnswer('A')">${
    question.options.A
  }</button>
  <button class="ansOptions" onclick="checkAnswer('B')">${
    question.options.B
  }</button>
  <button class="ansOptions" onclick="checkAnswer('C')">${
    question.options.C
  }</button>
  <button class="ansOptions" onclick="checkAnswer('D')">${
    question.options.D
  }</button><br><hr>
`;
  questionContainer.appendChild(questionElement);
}

// Check Answer
function checkAnswer(selectedOption) {
  const question = quizData[currentCategory][currentQuestionIndex];
  const correctAnswer = question.correctAnswer;
  if (selectedOption === correctAnswer) {
    score++;
    document.getElementById("score").textContent = `Score: ${score}`;
  }
  currentQuestionIndex++;
  attemptedQuestionsCount++;
  if (currentQuestionIndex < 10) {
    loadQuestion(currentCategory);
  } else {
    endQuiz();
  }
}

// End Quiz
function endQuiz() {
  clearInterval(timerInterval);
  const endTime = new Date().getTime();
  const countedTime = Math.floor((endTime - startTime) / 10);
  const totalTimeSeconds = countedTime - 2;
  const totalQuestions = 10;
  const attemptedQuestions = attemptedQuestionsCount;
  const correctAnswers = score;
  const wrongAnswers = attemptedQuestions - correctAnswers;
  const scorePercentage = Math.floor((correctAnswers / totalQuestions) * 100);

  document.getElementById(
    "totalTime"
  ).textContent = `${totalTimeSeconds} seconds`;
  document.getElementById("totalQuestions").textContent = totalQuestions;
  document.getElementById("attemptedQuestions").textContent =
    attemptedQuestions;
  document.getElementById("correctAnswers").textContent = correctAnswers;
  document.getElementById("wrongAnswers").textContent = wrongAnswers;
  document.getElementById("scorePercentage").textContent = scorePercentage;

  showPage("resultPage");
}

// Go to Home
function goToHome() {
  showPage("homePage");
  window.location.reload();
}

// Show page function
function showPage(pageId) {
  const pages = document.getElementsByClassName("page");
  for (let page of pages) {
    page.style.display = "none";
  }
  document.getElementById(pageId).style.display = "block";
}

// Select Category
function selectCategory(category) {
  currentCategory = category;
  startTimer();
  showPage("quizPage");
  loadQuestion(currentCategory);
}

//previous Qustion
function prevQuestion() {
  currentQuestionIndex--;
  if (currentQuestionIndex > 1) {
    loadQuestion(currentCategory);
  } else {
    loadQuestion(category);
  }
}
// Next Question
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < 10) {
    loadQuestion(currentCategory);
  } else {
    endQuiz();
  }
}

function resetQuizState() {
  currentQuestionIndex = 0;
  clearInterval(timerInterval); // Clear the interval
  countdown = 100; // Reset countdown to its initial value
  document.getElementById("timer").textContent = `Timer: ${countdown} seconds`; // Update timer display
  startTimer();

  attemptedQuestionsCount = 0;
  score = 0;
  document.getElementById("score").textContent = `Score: ${score}`;
}

function restartQuiz() {
  resetQuizState(); // Reset quiz state
  loadQuestion(currentCategory); // Load the first question of the current category
  showPage("quizPage"); // Show the quiz page
}

// Initialize the Quiz
showPage("homePage");
