//Dependencies
const inquirer = require('inquirer');
const db = require('./db/connection')
db.connect(function (err, data){
    if (err) 
    throw err
    whatToDo();
})
//Create all prompt functions


// Function to ask user if they would like to keep using the Employee Tracker or exit



const whatToDo = () => {
    inquirer.prompt({
        name: 'init',
        message: 'Welcome, please choose what you would like to do: ',
        type: 'list',
        choices: ['View all departments', 'View all roles', 'View all employees',
    'Add a department', 'Add a role', 'Add an employee', 'Update employee role']
    })
    .then(data => {
        switch (data.whatToDo) {
            case 'View all departments':
                nextTask();
                break;
            case 'View all roles':
                nextTask();
                break;
            case 'View all employees':
                nextTask();
                break;
            case 'Add a department':
                nextTask();
                break;
            case 'Add a role':
                nextTask();
                break;
            case 'Add an employee':
                nextTask();
                break;
            case 'Update employee role':
                nextTask();
                break;
        }
    })
};



function nextTask() {
    inquirer.prompt({
        name: 'next',
        type: 'list',
        message: 'Would you like to do something else?',
        choices: ['Yes', 'No']
    })
    .then(function(nextTaskData){
        switch (nextTaskData.nextTask) {
            case 'Yes':
                whatToDo();
                break;
            case 'No':
                console.log('Thank you for using the Employee Tracker!');
                break;
        }
    })
}


function viewDepartments() {
    db.query()
}