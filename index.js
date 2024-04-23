#! /usr/bin/env node
import inquirer from "inquirer";
// computer generated value
let computerNumber = Math.floor(Math.random() * 10);
// get input value in answer
let answer = await inquirer.prompt([
    {
        name: 'number',
        type: 'input',
        message: 'Enter Number to Guess In Between 1 to 10 : ',
    }
]);
// check if match
if (computerNumber == answer.number) {
    console.log(`Congratulations! You Win : Computer You Selected ${answer.number} & Computer Selected ${computerNumber}`);
}
else {
    console.log(`Sorry! You Lose : Computer You Selected ${answer.number} & Computer Selected ${computerNumber}`);
}
