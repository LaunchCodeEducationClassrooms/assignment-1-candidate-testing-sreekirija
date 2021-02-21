const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName="";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question="Who was the first American woman in space? ";
let correctAnswer="Sally Ride";
let candidateAnswer="";
let questions=["Who was the first American woman in space? ",
"True or false: 5000 meters = 5 kilometers. ",
"5 + 3)/2 * 10 = ? ",
"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
"What is the minimum crew size for the ISS? "];
let correctAnswers=["Sally Ride","True","40","Trajectory","3"];
let candidateAnswers=[];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Enter your Name: ");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //



for(i=0;i<questions.length;i++) {
candidateAnswers.push(input.question(questions[i]));
}
}
function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
console.log(`Candidate Name: ${candidateName}`);
for(j=0;j<questions.length;j++) {
 //console.log(`Your Answer: ${candidateAnswers[j]}
//Correct Answer: ${correctAnswers[j]}`);
console.log(`${j+1}) ${questions[j]}
Your Answer: ${candidateAnswers[j]}
Correct Answer: ${correctAnswers[j]}
`);
}
let grade;
let status;
let numberOfCorrectAnswers=0;
for(k=0;k<questions.length;k++) {
  if(candidateAnswers[k].toLowerCase()===correctAnswers[k].toLowerCase()) {
    numberOfCorrectAnswers++;
  } 
}
  grade = numberOfCorrectAnswers / questions.length * 100
  if(grade>=80) {
    status="PASSED";
  }else {
    status="FAILED";
  }
  console.log(`>>> Overall Grade: ${grade}% (${numberOfCorrectAnswers} of ${questions.length} responses correct) <<<
>>> Status: ${status} <<<`);
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Welcome ${candidateName}!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};