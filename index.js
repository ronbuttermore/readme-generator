// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Give a brief description of your project.",
    "How does the user install or access your project?",
    "What are the features of your project and how can they be used?",
    "How can others contribute to this project (do you have any guidelines for contribution?",
    "Describe any tests you have run on this project?",
    "Please enter your GitHub username: ",
    "Please enter your email address: "
];

// TODO: Create a function to write README file
inquirer
    .prompt([
        {
            type:'input',
            name: 'title',
            message: questions[0],
        },
    ])
    .then((data) => {
        fs.writeFile('README.md', `${data.title}`, (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    })
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
