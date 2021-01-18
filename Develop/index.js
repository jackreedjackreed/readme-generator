// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
        message: "How do you use this project?"
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

// prompt user
inquirer
    .prompt(questions)
    .then((data) => {
        // generate README with generateMarkdown.js
        const markdown = generateMarkdown(data);
        // write the README file using the generated-markdown data
        fs.writeFile("README.md", markdown, (err) =>
         err ? console.log("Oops, didn't work!") : console.log("Success!")
    )
    });

