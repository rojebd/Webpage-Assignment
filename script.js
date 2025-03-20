var timer = 0;
var firstTime = true;
const TIME_LIMIT = 10;

setInterval(increaseTimer, 1000);

function increaseTimer() {
    timer += 1;
    if (firstTime == false) {
        document.getElementById('timer_text').innerHTML = `[Timer:DONE]`;
        return;
    }
    if (timer == TIME_LIMIT && firstTime == true) {
        document.getElementById("my_form").submit();
        document.getElementById('submit_button').disabled = false;
        submitForm();
        firstTime = false;
    }
    document.getElementById('timer_text').innerHTML = `[Timer:${timer}]`;
}

// JavaScript source code
function submitForm() {

    // Get actual string from answers
    var question1 = document.getElementById('question1').value.toLowerCase().trim();
    var question2 = document.getElementById('question2').value.toLowerCase().trim();
    var question3 = document.getElementById('question3').value.toLowerCase().trim();
    var question4 = document.getElementById('question4').value.toLowerCase().trim();
    
    var res = 0;
    // All answers are incorrect by default as the user enters their response
    // we check if they have the correct answer and if they do
    // we change it
    var correct = ["Incorrect", "Incorrect", "Incorrect", "Incorrect"];

    // Check correct answer for each question
    if (question1 == "queen") {
        correct[0] = "Correct";
        res += 1;
    }
    if (question2 == "bishop") {
        correct[1] = "Correct";
        res += 1;
    }
    if (question3 == "horse") {
        correct[2] = "Correct";
        res += 1;
    }
    if (question4 == "king") {
        correct[3] = "Correct";
        res += 1;
    }

    // Set high score
    var score = localStorage.getItem("score");
    if (score == null) {
        localStorage.setItem("score", "0");
    } else {
        if (res > parseInt(score)) {
            localStorage.setItem("score", res.toString());
        }
    }
    score = localStorage.getItem("score");
    document.getElementById('score').innerHTML = `Highest Score: ${score}/4`;

    // Your mark is ${res}/4 which is ${res/4*100}%`, out of 4 and percentage
    // Inject html to my_grade element
    document.getElementById('my_grade').innerHTML = `
Your grade is ${res}/4 which is ${res/4*100}%<br>
Question 1: ${correct[0]}<br>
Question 2: ${correct[1]}<br>
Question 3: ${correct[2]}<br>
Question 4: ${correct[3]}<br>
`;
    document.getElementById('question1').disabled = true;
    document.getElementById('question2').disabled = true;
    document.getElementById('question3').disabled = true;
    document.getElementById('question4').disabled = true;

};

function clearScore() {
    localStorage.setItem("score", "0");
    var score = localStorage.getItem("score");
    document.getElementById('score').innerHTML = `Highest Score: ${score}/4`;
}

function resetQuiz() {
    document.getElementById('my_grade').innerHTML = "";
    var question1 = document.getElementById('question1').value = "";
    var question2 = document.getElementById('question2').value = "";
    var question3 = document.getElementById('question3').value = "";
    var question4 = document.getElementById('question4').value = "";
    
    document.getElementById('submit_button').disabled = false;
    document.getElementById('question1').disabled = false;
    document.getElementById('question2').disabled = false;
    document.getElementById('question3').disabled = false;
    document.getElementById('question4').disabled = false;

}


function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function randomizeQuestions() {

    var questions = [
        `<h2>Question 1: What is the most important piece in chess?</h2>
  <img src='https://assetsio.gnwcdn.com/chess-playing-hand.jpeg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp' alt='Photo of a hand playing as black in chess with shiny metal-like pieces' style='width:450px;height:250px'>
  <br>
  <label for='question1'></label>
  <input type='text' id='question1' name='Question 1'>`,

        `<h2>Question 2: What is the piece in chess that moves diagonally?</h2>
  <img src='https://upload.wikimedia.org/wikipedia/commons/6/6f/ChessSet.jpg' alt='Photo of chess images on a table being displayed' style='width:450px;height:250px'>
  <br>
  <label for='question2'></label>
  <input type='text' id='question2' name='Question 2'>`,

        `<h2>Question 3: What is the piece in chess that moves in an L shape?</h2>
  <img src='https://images.pexels.com/photos/814133/pexels-photo-814133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Photo of white chess pieces displayed in front of the chess board reflecting them from above' style='width:450px;height:250px'>
  <br>
  <label for='question3'></label>
  <input type='text' id='question3' name='Question 3'>`,

        `<h2>Question 4: What is the piece in chess that you have to protect to win?</h2>
  <img src='https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg' alt='Photo of a black chess pawn with a mini golden crown on top of it' style='width:450px;height:250px'>
  <br>
  <label for='question4'></label>
  <input type='text' id='question4' name='Question 4'>`
    ];

    shuffle(questions);
    document.getElementById('my_form').innerHTML = `
${questions[0]} ${questions[1]} ${questions[2]} ${questions[3]}
<br><br>
<input type='submit' id='submit_button' value='Mark Quiz'>
<button type='button' onclick='resetQuiz()'>Reset Quiz</button>
<button type='button' onclick='clearScore()'>Clear Score</button>
`
}
