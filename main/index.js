const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
    type: 'input',
    message: 'What is the title of the project?',
    name: 'title',
    // validate to check if the user put input value 
    validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
}, 
{
    type: 'input',
    message: 'What does the project entail? Give us a detailed deascription explaining the project.',
    name: 'description',
    validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
}, 
{
    type: 'input',
    message: 'What installation methods do I need to take to get this application to work properly? Give a detailed answer.',
    name: 'installation',
    validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
}, 
{
    type: 'input',
    message: 'How does this project work? Give a detailed answer.',
    name: 'usage',
    validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
},  
{
    type: 'list',
    message: 'Which license would you like to use?',
    name: 'license',
    choices: [
        'MIT License', 
        'Apache License 2.0', 
        'GNU Genral Public License v3.0',
    ],
    validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
}, 
{
    type: 'input',
    message: 'Who were the contributors on this project? Why did you choose these collaborators? If done solo, what was the creation process for yourself?',
    name: 'contributing',
    validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
}, 
{
    type: 'input',
    message: 'Github Username?',
    name: 'git',
    validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
}, 
{
    type: 'input',
    message: 'LinkedIn Username?',
    name: 'linkedIn',
    validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
}, 
{
    type: 'input',
    message: 'E-mail?',
    name: 'email',
    validate: (value)=>{ if(value){return true} else {return 'i need a value to continue'}},
}
]


// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generatedREADME.md', fileContent, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
      .then(function(data){
        console.log(data);
      var fileContent = generateMarkdown(data);
      writeToFile(fileContent)
    })
}

// Function call to initialize app
init();

// export
module.exports = questions; 