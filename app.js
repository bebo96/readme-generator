const generateSite = require('./utils/generate-site.js');
const fs = require('fs');

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questionsInput = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'projectName',
            message: 'What is your projects name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your projects name: ');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Enter your projects description: '
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: 'Enter your projects installation instructions: '
        },
        {
            type: 'input',
            name: 'usageInformation',
            message: 'Enter your projects usage information: '
        },
        {
            type: 'input',
            name: 'contributionGuidelines',
            message: 'Enter your projects contribution guidelines: '
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Enter your projects test instructions: '
        },
        {
            type: 'input',
            name: 'userName',
            message: 'Enter your github username: '
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: 'Enter your email address that you would like to be reached on: '
        },
    ]);

};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./dist/' + fileName, data, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
        }
        console.log("File created!!");
    });
}
// TODO: Create a function to initialize app
function init() {
    questionsInput()
    .then(data => {
        return generateSite(data);
    })
    .then(readmeData => {
        writeToFile('README.md', readmeData);
    })
    .catch(err => {
        console.log(err);
    });
}
// Function call to initialize app
init();