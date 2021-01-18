// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

console.log("testing donezo");

// TODO: Create an array of questions for user input --> github username, email, stuff below
const questions = [
    {
        type: "input",
        name: "github",
        message: "What's your GitHub username?"
    },{
        type: "input",
        name: "email",
        message: "What's your email address?"
    },{
        type: "input",
        name: "title",
        message: "What's the title of this project?"
    },{
        type: "input",
        name: "description",
        message: "Provide a description of the project."
    },{
        type: "input",
        name: "installation",
        message: "How do you install this project?"
    },{
        type: "input",
        name: "usage",
        message: "Describe the purpose of using this project."
    },{
        type: "input",
        name: "contribution",
        message: "If someone wants to contribute to this project, how should they proceed?"
    },{
        type: "input",
        name: "tests",
        message: "Describe any tests relevant to this project."
    },{
        type: "list",
        name: "license",
        message: "What license would you like to use?",
        choices: ["ISC", "Apache", "MIT"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const rubric = 
`# Title

## Description

## Table of Contents

## Installation

## Usage

## License

## Contributing

## Tests

## Questions`



// inquirer
// .prompt([
//     {
//         type: 'input',
//         message: 'what is your name?',
//         name: 'name',
//     },
//     {
//         type: 'input',
//         message: 'what languages do you know?',
//         name: 'languages',
//     },
//     {
//         type: 'input',
//         message: 'what is your preffered method of commuication?',
//         name: 'communication',
//     },
// ]).then((response) => 
//     {
//         fs.appendFile('log.txt', response, (err))
//     }
// )