// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("utils/generateMarkdown.js")

// TODO: Create an array of questions for user input --> github username, email, stuff below
const questions = [
    {
        
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