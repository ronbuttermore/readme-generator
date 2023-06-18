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
        {
            type:'input',
            name: 'description',
            message: questions[1],
        },
        {
            type:'input',
            name: 'installation',
            message: questions[2],
        },
        {
            type:'input',
            name: 'usage',
            message: questions[3],
        },
        {
            type:'input',
            name: 'contribute',
            message: questions[4],
        },
        {
            type:'input',
            name: 'test',
            message: questions[5],
        },
        {
            type:'input',
            name: 'username',
            message: questions[6],
        },
        {
            type:'input',
            name: 'email',
            message: questions[7],
        },
    ])
    .then((data) => {
        fs.writeFile('README.md', 
            `# ${data.title}\n\n## Description\n\n${data.description}\n\n## Table of Contents:\n\n-[Installation](#installation)\n\n-[Usage](#usage)\n\n-[Contribute](#contribute)\n\n-[Tests](#test)\n\n\n## Installation\n\n${data.installation}\n\n## Usage\n\n${data.usage}\n\n## Contribute\n\n${data.contribute}\n\n## Tests\n\n${data.tests}\n\n## License\n\n## Questions\n\nVisit my GitHub page at https://github.com/${data.username}. \nPlease direct any additional questions to ${data.email}`, 
            (err) =>
                err ? console.log(err) : console.log('Success!')
        );
    })
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();