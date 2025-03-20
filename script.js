// JavaScript source code
function submitForm() {
    // Get actual string from answers
    var question1 = document.getElementById('question1').value.toLowerCase().trim();
    var question2 = document.getElementById('question2').value.toLowerCase().trim();
    var question3 = document.getElementById('question3').value.toLowerCase().trim();
    var question4 = document.getElementById('question4').value.toLowerCase().trim();

    var res = 0;

    // Check correct answer for each question
    if (question1 == "queen") res += 1;
    if (question2 == "bishop") res += 1;   
    if (question3 == "horse") res += 1;
    if (question4 == "king") res += 1;

    // Your mark is ${res}/4 which is ${res/4*100}%`, out of 4 and percentage
    document.getElementById('my_grade').innerHTML = `Your grade is ${res}/4 which is ${res/4*100}%`
};
