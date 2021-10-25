//Dependencies
const inquirer = require('inquirer');

//Create all prompt functions

const startUp = () => {
    inquirer.prompt({
        name: 'init',
        message: 'Welcome, please choose what you would like to do: ',
        type: 'list',
        choices: ['View all departments', 'View all roles', 'View all employees',
    'Add a department', 'Add a role', 'Add an employee', 'Update employee role']
    })
};

startUp();