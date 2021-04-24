DROP DATABASE IF EXISTS employee_DB;

CREATE DATABASE employee_DB;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(30),
    PRIMARY KEY (id),
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL (10,2),
    department_id INT (20),
    PRIMARY KEY (id),
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR (30),
    last_name VARCHAR (30),
    role_id INT (20),
    manager_id INT (20),
);

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee_DB;