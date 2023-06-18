const inquirer = require('inquirer');
const fs = require('fs');

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
            type:'list',
            name: 'license',
            message: 'Please choose a license for your application',
            choices: ['Apache License 2.0','GNU General Public License v3.0','MIT License','BSD 2-Clause Simplified License','BSD 3-Clause New or Revised License','Boost Software License 1.0','Creative Commons Zero v1.0 Universal','Eclipse Public License 2.0','GNU Affero General Public License v3.0','GNU General Public License v2.0','GNU Lesser General Public License v3.0','Mozilla Public License 2.0','The Unlicense'],
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
        var badge;
        if (data.license == 'Apache License 2.0'){
            badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
        } else if (data.license == 'GNU General Public License v3.0'){
            badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
        } else if (data.license == 'MIT License'){
            badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        } else if (data.license == 'BSD 2-Clause Simplified License'){
            badge = '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
        } else if (data.license == 'BSD 3-Clause New or Revised License'){
            badge = '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
        } else if (data.license == 'Boost Software License 1.0'){
            badge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
        } else if (data.license == 'Creative Commons Zero v1.0 Universal'){
            badge = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
        } else if (data.license == 'Eclipse Public License 2.0'){
            badge = '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
        } else if (data.license == 'GNU Affero General Public License v3.0'){
            badge = '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)';
        } else if (data.license == 'GNU General Public License v2.0'){
            badge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
        } else if (data.license == 'GNU Lesser General Public License v3.0'){
            badge = '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)';
        } else if (data.license == 'Mozilla Public License 2.0'){
            badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
        } else if (data.license == 'The Unlicense'){
            badge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
        }
        fs.writeFile('README.md', 
            `# ${data.title}\n\n`+badge+`\n\n## Description\n\n\n\n${data.description}\n\n## Table of Contents:\n\n-[Installation](#installation)\n\n-[Usage](#usage)\n\n-[Contribute](#contribute)\n\n-[Tests](#test)\n\n\n## Installation\n\n${data.installation}\n\n## Usage\n\n${data.usage}\n\n## Contribute\n\n${data.contribute}\n\n## Tests\n\n${data.tests}\n\n## License\n\nThis project is covered under the ${data.license}\n\n## Questions\n\nVisit my GitHub page at https://github.com/${data.username}. \nPlease direct any additional questions to ${data.email}`, 
            (err) =>
                err ? console.log(err) : console.log('Success!')
        );
    })
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();