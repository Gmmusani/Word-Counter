#! /usr/bin/env node
// Importing Inquirer and chalk packages
import inquirer from "inquirer";
import chalk from "chalk";
// Display a colourful welcome message
console.log(chalk.bold.cyanBright("\n \t\t welcome to GMMusani - Word Counter"));
console.log("=".repeat(70));
// Prompt the user to enter a sentence
let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence"
    }
]);
// Trimming the sentence and splitting it into words based on "spaces"
let words = answer.sentence.trim().split(" ");
// Analysis of user input sentence
console.log("=".repeat(70));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(70));
