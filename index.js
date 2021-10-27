//Dependencies
const inquirer = require('inquirer');
const db = require('./db/connection')
require('console.table');

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
        switch (data.init) {
            case 'View all departments':
                viewDepartments();
                break;
            case 'View all roles':
                viewRole();
                break;
            case 'View all employees':
                viewEmployees();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
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
        switch (nextTaskData.next) {
            case 'Yes':
                whatToDo();
                break;
            case 'No':
                console.log('Thank you for using the Employee Tracker!');
                process.exit(0)
                break;
        }
    })
}


function viewDepartments() {
    db.query('SELECT * FROM department', function(err, data){
        if (err)
        throw err;
        console.table(data);
        nextTask();
    })
}

function viewEmployees() {
    db.query('SELECT * FROM employee', function(err, data){
        if (err)
        throw err;
        console.table(data);
        nextTask();
    })
}

function viewRole() {
    db.query('SELECT * FROM e_role', function(err, data){
        if (err)
        throw err;
        console.table(data);
        nextTask();
    })
}

function addDepartment(){
    inquirer.prompt({
        name: 'depName',
        type: 'text',
        message: 'Please enter the name of the department you would like to add: '
    })
    .then(function(data){
        db.query('INSERT INTO department (name) VALUES (?)', data.depName, function(err, data){
            if (err)
            throw err
            nextTask();
        })
    })
}

function addRole(){
    inquirer.prompt([{
        name: 'title',
        type: 'text',
        message: 'Please enter the name of the role you would like to add: '
    },
    {
        name: 'salary',
        type: 'input',
        message: 'Please enter the salary for this role: '
    },
    {
        name: 'id',
        type: 'list',
        message: 'Please enter the id of the department: ',
        choices: ['1', '2', '3', '4', '5']
    }])
    .then(function(data){
        db.query('INSERT INTO e_role (title, salary, role_id) VALUES  (?, ?, ?)', [data.title, data.salary, data.id], function(err, data){
            if (err)
            throw err
            nextTask();
        })
    })
}