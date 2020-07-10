const inquirer = require("inquirer");
const util = require("inquirer");
const fs = require("fs")

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the Project Title?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the description?",
            name: "name"

        },
        {
            type: "input",
            message: "What is the installation?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the usage?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the liscense?",
            name: "name"
        },
        {
            type: "input",
            message: "Contributing?",
            name: "name"
        },
        {
            type: "input",
            message: "Tests?",
            name: "name"
        },
        {
            type: "input",
            message: "Questions to add?",
            name: "name"
        }

    ])

const questions = [

];

function writeToFile(fileName, data) {
}

function init() {

}

init();
