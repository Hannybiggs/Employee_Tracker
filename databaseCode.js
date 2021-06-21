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
    const query = 
    'SELECT first_name,last_name FROM employee';
    connection.query(query, (err, res) => {
      if (err) throw (err);
      res.forEach(({ first_name, last_name}) =>
      console.log(
        `First Name: ${first_name} || Last Name: ${last_name}`
        )
      );
      runSearch();
    });
  };
  
  const departmentSearch = () => {
    inquirer
      .prompt({
        name:'department',
        type: 'input'
      })
      .then((answer) => {
        const query = 'SELECT first_name, last_name, '
        //NEED TO JOIN TO GET INFO FROM OTHER TABLE FOR DEPARTMENT
        connection.query(query, {})

      }
      );
  };
  
  const roleSearch = () => {
  
  };
  
  const addDepartment = () => {
    inquirer
      .prompt([
        {
          name: 'addDepartment',
          type: 'input',
          message: 'What department would you like to add?',
        }
      .then((answer) => {
        const query =
        'INSERT INTO department(department_name) VALUES ?';
        connection.query(query, [answer.addDepartment], (err, res) => {
          if (err) throw err;
          console.log(res);
          runSearch();
        })
      })
      ])
  };
  
  const addRole = () => {
    inquirer
      .prompt([
        {
          name: 'addRole',
          type: 'input',
          message: 'What role would you like to add?',
        }
      .then((answer) => {
        const query =
        'INSERT INTO role(title) VALUES ?';
        connection.query(query, [answer.addRole], (err, res) => {
          if (err) throw (err);
          console.log(res);
          runSearch();
        })
      })
      ])
  
  };
  
  const addEmployee = () => { 
    // inquirer
    // .prompt([
    //   {
    //     name: 'addEmployee',
    //     type: 'input',
    //     message: 'What role would you like to add?',
    //   }
    // .then((answer) => {
    //   const query =
    //   'INSERT INTO role(title) VALUES ?';
    //   connection.query(query, [answer.addRole], (err, res) => {
    //     if (err) throw (err);
    //     console.log(res);
    //     runSearch();
    //   })
    // })
    // ])

  };
  
  const updateEmployee = () => {
  
  };
