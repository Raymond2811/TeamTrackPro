INSERT INTO departments (name)
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
('Lawyer',75000000,3),
('Customer Service',1000000000,4);

INSERT INTO employee (first_name,last_name, role_id,manager_id)
VALUES ('Joe', 'Sanchez', 1, 4),
('Jerry','Smith',2,4),
('Alexa','Jones',3,1),
('Max','Brown',4,1),
('Sarah','Chan',5,2),
('Tom','Allen',6,2),
('Kevin','James',7,3),
('Malia', 'Cortez',8,3),
('Ashley','Gomez',9,4);