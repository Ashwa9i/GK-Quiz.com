const questions = [
  {
   question: "Berlin in Capital of which country?",
    options: ["Germany", "France", "Italy", "Spain"],
    answer: "Germany"
  },
  {
    question: "Ottawa is capital of which country?",
    options: ["United States", "United Kingdom", "Canada", "Australia"],
    answer: "Canada"
  },
  {
    question: "Delhi is capital of which country?",
    options: ["China", "India", "Russia", "Pakistan"],
    answer: "India"
  },
  {
    question: "Beijing is capital of which country?",
    options: ["Mexico", "China", "taiwan", "Bangladesh"],
    answer: "China"
  },
  {
    question: "Tokyo is capital of which country?",
    options: ["japan", "Taiwan", "bhutan", "indonesia"],
    answer: "japan"
  },
  {
    question: "Seoul is capital of which country?",
    options: ["South Korea", "bhutan", "Taiwan", "North korea"],
    answer: "South Korea"
  },
  {
    question: "Dhaka is capital of which country?",
    options: ["United Kingdom", "Australia", "North korea", "Bangladesh"],
    answer: "Bangladesh"
  },
  {
    question: "Rome is capital of which country?",
    options: [ "Nepal", "Italy", "France", "spain"],
    answer: "Italy"
  },
  {
    question: "moscow is capital of which country?",
    options: [ "Mali", "Maldives", "Russia", "Berlin"],
    answer: "Russia"
  },
  {
    question: "Bamako is capital of which country?",
    options: [ "malta", " Mali", "malawai", "maldives"],
    answer: "Mali"
  },
 
  // Add more questions here
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const checkAnswerButton = document.getElementById('check-answer');
const resultElement = document.getElementById('result');

function showQuestion() {
  questionElement.textContent = questions[currentQuestion].question;
  optionsElement.innerHTML = '';
  questions[currentQuestion].options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.addEventListener('click', () => {
      checkAnswer(option);
    });
    optionsElement.appendChild(button);
  });
}

function checkAnswer(selectedOption) {
  if (selectedOption === questions[currentQuestion].answer) {
    score++;
    resultElement.textContent = "Correct!";
  } else {
    resultElement.textContent = "Incorrect! The correct answer is " + questions[currentQuestion].answer;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  questionElement.textContent = "Quiz Complete!";
  optionsElement.innerHTML = '';
  checkAnswerButton.style.display = 'none';
  resultElement.textContent = "Your Score: " + score + " out of " + questions.length;
}

showQuestion();
//Made by Ashwani Pandey
