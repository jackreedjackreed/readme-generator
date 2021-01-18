// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const renderLicenseBadge = require('./utils/generateMarkdown.js');
const renderLicenseLink = require('./utils/generateMarkdown.js');
const renderLicenseSection = require('./utils/generateMarkdown.js');


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

inquirer
    .prompt(questions)
    .then((data) => {
        console.log(data);
        console.log(data.license + "    yooo that's the license man");
        const license = data.license;
        console.log(license + " straight license");
        const markdown = generateMarkdown(data);
        console.log(markdown);

        // const licenseBadge = renderLicenseBadge(license);
        // const licenseLink = renderLicenseLink(license)
        // console.log("heeeeeeey this is the " + licenseBadge);

    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
