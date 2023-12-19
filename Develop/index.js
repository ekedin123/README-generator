// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe the purpose of this project:"
    },
    {
        type: "input",
        name: "installation",
        message: "How does the user install this project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How does the user interact with this project?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Who, if anyone, or what contributed to create this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "how should the user run tests with this project?"
    },
    {
        type: "list",
        name: "license",
        message: "Which license, if any, does this project use?",
        choices: ["MIT", "IBM", "None"]
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => {
        console.log("Created README.md");
        writeToFile("./utils/README.md", generateMarkdown({...response}));
    })
};

// Function call to initialize app
init();
