
# README generator
I am builiding a node.js script that will generate a template for a README markdown document. This should help set up a well defined README to include with all programs that I build going forward.  

## User Story
as a user it is often helpful to have a README document accompany an application to document my approach and help future users on the application understand how to best use the application.  

* However, over time generating the structure of README become repetiitve 
* Using node.js we can create a README generator to help automate this step
* Automated README generator will help the user attach READMEs to all projects

## Installation
I used node.js to automate the generation of a README. I also had to install inquier libary and used the file service package within Node. 


A few key code snippets that helped to build the program:

Using the inquirer package
```
inquirer
    .prompt([
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "name"
        },
```

Using a string literal to build the markdown file
```
var generator = `
# Project ${title}
```

Using file service libary of node.js
```
 fs.writeFile("goodREADME.md", generator, data, function (err) {
            console.log("test writeFile");

        })
    });
    
```


Check out inquirer [Inquirer](https://www.npmjs.com/package/inquirer)
and File Service [FSwrite-node](https://nodejs.org/api/fs.html)

### Link to deployed README generator
[README-Generator](https://github.com/crackedsnowboard/README-generator)

#### GIF of Applicaton

<img src="Assets/Animated-GIF-source.gif">

#### Author Links
[LinkedIn](linkedin.com/in/joel-mathen/) <br>
[GitHub](https://github.com/crackedsnowboard)


