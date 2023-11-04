INSERT INTO departments (department)
VALUES ('Engineering'),
('Finance'),
('Legal'),
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead',10000,4),
('Salesperson',100000,4),
('Lead Engineer',10000,1),
('Software Engineer',55000,1),
('Account Manager',8000,2),
('Accountant',5000,2),
('Legal Team Lead',10000,3),
('Lawyer',75000,3);

INSERT INTO employee (first_name,last_name, role_id, manager_id)
VALUES ('Joe', 'Sanchez', 1, NULL),
('Jerry','Smith',2,1),
('Alexa','Jones',3,NULL),
('Max','Brown',4,3),
('Sarah','Chan',5,NULL),
('Tom','Allen',6,5),
('Kevin','James',7,NULL),
('Malia', 'Cortez',8,7);