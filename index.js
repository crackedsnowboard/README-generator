const inquirer = require("inquirer");
// const util = require("inquirer");
const fs = require("fs")

inquirer
    .prompt([
        {
            type: "input",
            message: "What is the Project Title?",
            name: "title"
        },
        {
            type: "input",
            message: "What is the description?",
            name: "description"

        },
        {
            type: "input",
            message: "What is the installation?",
            name: "instal"
        },
        {
            type: "input",
            message: "What is the usage?",
            name: "usage"
        },
        {
            type: "input",
            message: "What is the liscense?",
            name: "liscense"
        },
        {
            type: "input",
            message: "Contributing?",
            name: "contributing"
        },
        {
            type: "input",
            message: "Tests?",
            name: "tests"
        },
        {
            type: "input",
            message: "Questions to add?",
            name: "questions"
        }
    ]).then(function (data) {
        console.log(data);
        var title = data.title;
        var description = data.description;
        var instal = data.instal;
        var usage = data.usage;
        var liscense = data.liscense;
        var contributing = data.contributing;
        var tests = data.tests;
        var questions = data.questions;
        var generator = `
# Project ${title}

## Description 
${description}

## Table of Contents

### Installation 
${instal}

### Usage
${usage}

#### License
[![License](https://img.shields.io/badge/License%20${liscense}-1f425f.svg)](http://commonmark.org)

#### Contributing
${contributing}

##### Tests
${tests}

##### Questions
${questions}
* User GitHub profile email
* User Gitub email

`;
        fs.writeFile("README.md", generator, data, function (err) {
            console.log("test writeFile");

        })
    });

// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
