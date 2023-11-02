INSERT INTO departments (department)
VALUES ('Engineering'),
('Finance'),
('Legal'),
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead',10,4),
('Salesperson',1000,4),
('Lead Engineer',1,1),
('Software Engineer',5,1),
('Account Manager',8,2),
('Accountant',500,2),
('Legal Team Lead',1000000,3),
('Lawyer',75000000,3);

INSERT INTO employee (first_name,last_name, role_id, manager_id)
VALUES ('Joe', 'Sanchez', 1, NULL),
('Jerry','Smith',2,1),
('Alexa','Jones',3,NULL),
('Max','Brown',4,3),
('Sarah','Chan',5,NULL),
('Tom','Allen',6,5),
('Kevin','James',7,NULL),
('Malia', 'Cortez',8,7);