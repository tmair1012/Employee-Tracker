//Dependencies
const inquirer = require('inquirer');
const db = require('./db/connection')
require('console.table');

db.connect(function (err, data){
    if (err) 
    throw err
    whatToDo();
})


//function to ask the user what they would like to do, the dashboard of the app
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
                addEmployee();
                break;
            case 'Update employee role':
                nextTask();
                break;
        }
    })
};


//function to prompt the user if they would like to continue
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

//function to view all departments in mysql database
function viewDepartments() {
    db.query('SELECT * FROM department', function(err, data){
        if (err)
        throw err;
        console.table(data);
        nextTask();
    })
}
//function to view all employees in mysql database
function viewEmployees() {
    db.query('SELECT * FROM employee', function(err, data){
        if (err)
        throw err;
        console.table(data);
        nextTask();
    })
}
//function to grab roles from database and show in terminal
function viewRole() {
    db.query('SELECT * FROM e_role', function(err, data){
        if (err)
        throw err;
        console.table(data);
        nextTask();
    })
}
//Function to add additional department to mysql database
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

//function to add a role to the mysql table
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

//Function to add an employee to the employee mysql table
function addEmployee() {
    inquirer.prompt([{
        name: 'first_name',
        type: 'text',
        message: 'Please enter the first name of the employee you would like to add: '
    },
    {
        name: 'last_name',
        type: 'input',
        message: 'Please enter the last name of the employee you would like to add: '
    },
    {
        name: 'role_id',
        type: 'list',
        message: 'Please enter the role id of the employee: ',
        choices: ['1', '2', '3', '4', '5'],
    }
    ])
    .then(function(data){
        db.query('INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)', [data.first_name, data.last_name, data.role_id], function(err, data){
            if (err)
            throw err
            nextTask();
        });
    });
};

//function to update one employee from the employees table
function updateEmployee(){
    //grab employees from TABLE

   db.query(`SELECT * FROM employee`, (err, data) => {
       if (err)
       throw err;

    
   })
}