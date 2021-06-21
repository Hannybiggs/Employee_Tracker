//Use mySQL, InquirerJS, and console.table NPM packages

const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require ('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
  
    port: 3306,
  
    user: 'root',
  
    password: '',
    database: 'employee_DB',
});

connection.connect((err) => {
    if (err) throw err;
    runSearch();
  });
  
  const runSearch = () => {
    inquirer
      .prompt({
        name: 'action',
        type: 'rawlist',
        message: 'What would you like to do?',
        choices: [
          'View All Employees',
          'View Employees by Department',
          'View Employees by Role',
          'Add Department',
          'Add Role',
          'Add Employee',
          'Update Employee'
        ],
      })
      .then((answer) => {
        switch (answer.action) {
          case 'View All Employees':
            allEmployees();
            break;
  
          case 'View Employees by Department':
            departmentSearch();
            break;
  
          case 'View Employees by Role':
            roleSearch();
            break;
  
          case 'Add Department':
            addDepartment();
            break;
  
          case 'Add Role':
            addRole();
            break;
  
          case 'Add Employee':
            addEmployee();
            break;
          
          case 'Update Employee':
            updateEmployee();
            break;
  
          default:
            console.log(`Invalid action: ${answer.action}`);
            break;
        }
      });
  };
  
  const allEmployees = () => {
  
  };
  
  const departmentSearch = () => {
  
  };
  
  const roleSearch = () => {
  
  };
  
  const addDepartment = () => {
  
  };
  
  const addRole = () => {
  
  };
  
  const addEmployee = () => {
  
  };
  
  const updateEmployee = () => {
  
  };
