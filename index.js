// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./Develop/utils/generateMarkdown')
// TODO: Create an object of questions for user input
const questions = 
    {
    title:'What is the title of the project',
    
    description:`
    Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
    - What was your motivation?
    - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
    - What problem does it solve?
    - What did you learn?
    `,
    
    installInstructions:`
    What are the steps required to install your project? 
    Provide a step-by-step description of how to get the development environment running.
    `,
    
    usageInfo:'Provide instructions and examples for use.',
    
    contributionGuideline:'Provide guidelines for how to contribute',
    
    testInstructions:'Write tests for your application. Then provide examples on how to run them here.',
    
    license:'What type of license does your project have',
    
    gitHubUserName:'Provide your github user name',
    
    email:'Provide your email'
};

const promptUser = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: questions.title,
            validate: nameInput => {
              if (nameInput) {
                return true;
              } else {
                console.log('Please enter the name of the project');
                return false;
              }
            }
        },
        {
          type: 'input',
          name: 'description',
          message: questions.description
        },
        {
          type: 'input',
          name: 'installInstructions',
          message: questions.installInstructions
        },
        {
          type:'input',
          name:'usageInfo',
          message:questions.usageInfo
        },
        {
          type:'input',
          name:'contributionGuideline',
          message:questions.contributionGuideline
        },
        {
          type:'input',
          name: 'testInstructions',
          message: questions.testInstructions
        },
        {
          type:'list',
          name:'license',
          message:questions.license,
          choices:["MIT","IPL 1.0","ISC","MPL 2.0"]
        },
        {
          type:'input',
          name:'gitHubUserName',
          message:questions.gitHubUserName
        },
        {
          type:'input',
          name:'email',
          message:questions.email
        }
    ])
}

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, data, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

// TODO: Create a function to initialize app
init = () => {
  return promptUser()
  .then(userData => {
      return generateMarkdown(userData)
  })
  .then(markdown => {
      return writeToFile('./dist/readme.md',markdown)
  })
}

// Function call to initialize app
init();
