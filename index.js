var rs = require("readline-sync");
let chalk = require('chalk');

let green = chalk.greenBright;
let cyan = chalk.cyanBright;
let yellow = chalk.yellowBright;
let red = chalk.red;
let blue = chalk.blue;

const questions = require("./question");

console.log(green.bold("Welcome to The Quiz Game!!\n"));
var playerName = rs.question("What is Your Name : ");
console.log(yellow(`Welcome ${playerName}\n`));
console.log("There will be 10 questions with 4 Options.\nThis will test your knowledge about Mahabharata.");
console.log("Answer them with any one option A/B/C/D.");
console.log(green("+5 for right answer"),red("-2 for wrong answer \n"));
console.log(chalk.yellowBright("Let's Play..\n"));
//global varibale to keep socre
var score = 0;

function start(question,op, answer)
{
  console.log(cyan(question));
  console.log(cyan(op));
  var ans = rs.question("Answer: ");
  if (ans.toUpperCase() == answer.toUpperCase())
  {
    console.log(green("\tCorrect"));
    score = score + 5;
  } else {
    console.log(red("\tIncorrect"));
    console.log(green("Correct Answer is: "+answer));
    score = score - 2;
  }
  console.log(yellow("Your Score is: "+ score));
  console.log(blue("\n--------------------\n"));
}

for (let i=0; i < questions.length; i++) 
{
  start(questions[i].qus, questions[i].op ,questions[i].ans);
}
console.log("Final Score is: "+score);

highScore = [
    {
        username: "Nir",
        point: 45
    },
    {
        username: "Harman",
        point: 18
    },
    {
        username: "Rahi",
        point: 5
    }
];

console.log(chalk.bgYellow(" High Score "));

var max = highScore[0].point;
for (let i = 1; i < highScore.length; ++i) {
  if (highScore[i].point > max) {
    max = highScore[i].point;
  }
}

if(score>max){
  var user = {username: playerName, point: score};
  highScore.push(user);
  console.table(highScore);
  console.log(chalk.inverse.bold("\n Congrats u beat high score \n"));
}
else{
  console.table(highScore);
  console.log(chalk.inverse.bold("\n Better Luck Next Time \n"));
}