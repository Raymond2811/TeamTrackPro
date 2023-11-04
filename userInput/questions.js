const axios = require('axios');

const questions = [
    {
        type: 'list',
        name: 'tracker',
        message: 'What would you like to do?',
        choices: [
            'View All Employees',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department',
            'Quit'
        ]
    }
];

const followUPQuestions = [
    {
        type: 'input',
        name: 'employeeFirstName',
        message: 'Enter first name of the employee:',
        when: (answers) => answers.tracker === 'Add Employee',
    },
    {
        type: 'input',
        name: 'employeeLastName',
        message: 'Enter last name of the employee:',
        when: (answers) => answers.tracker === 'Add Employee',
    },
    {
        type:'list',
        name:'employeeRole',
        message:"What is the employee's role?",
        when: (answers) => answers.tracker === 'Add Employee',
        choices: async() => {
            try{
                const response = await axios.get('http://localhost:3001/api/tracker/roles');
                const roles = response.data;
                const roleChoices = roles.map(role => ({
                    name:role.title,
                    value:role.id,
                }));
                return roleChoices;
            }catch(error){
                console.error('Error fetching roles:', error);
            }
        }
    },
    {
        type:'list',
        name:'employeeManager',
        message: "Who's the employee's manager?",
        when: (answers) => answers.tracker === 'Add Employee',
        choices: async() => {
            try {
                const response = await axios.get('http://localhost:3001/api/tracker/employees');
                const employees = response.data;
                const managerChoices = employees.map((employee) => ({
                    name: `${employee.first_name} ${employee.last_name}`,
                    value: employee.id,
                }));
                return managerChoices;
            } catch (error) {
                console.error('Error fetching roles:', error);
            }
        }
    },
    {
        type: 'input',
        name: 'departmentName',
        message: 'Enter department name:',
        when: (answers) => answers.tracker === 'Add Department',
    },
    {
        type: 'input',
        name: 'roleName',
        message: 'Enter name of the role:',
        when: (answers) => answers.tracker === 'Add Role',
    },
    {
        type:'input',
        name:'roleSalary',
        message: " Enter role's salary:",
        when: (answers) => answers.tracker === 'Add Role',
    },
    {
        type:'list',
        name:'roleDepartment',
        message:"Which department does the role belong to?",
        when: (answers) => answers.tracker === 'Add Role', 
        choices: async() => {
            try{
                const response = await axios.get('http://localhost:3001/api/tracker/departments');
                const departments = response.data;
                const departmentChoices = departments.map(department => ({
                    name: department.department,
                    value: department.id,
                }));
                return departmentChoices;
            }catch(error){
                console.error('Error fetching departments:', error);
            }
        }
    },
    {
        type:'list',
        name:'selectedEmployee',
        message:"Which employee's role do you want to update?",
        when:(answers) => answers.tracker === 'Update Employee Role',
        choices: async() => {
            try{
                const response = await axios.get('http://localhost:3001/api/tracker/employees');
                const employees = response.data;

                const employeeChoices = employees.map((employee) => ({
                    name: `${employee.first_name} ${employee.last_name}`,
                    value: employee.id,
                }));
                return employeeChoices;
            }catch (error) {
                console.error('Error fetching roles:', error);
            }
        }
    },
    {
        type:'list',
        name:'updatedRole',
        message:"Which role do you want to assign the selected employee?",
        when:(answers) => answers.tracker === 'Update Employee Role',
        choices: async() => {
            try{
                const response = await axios.get('http://localhost:3001/api/tracker/roles');
                const roles = response.data;

                const roleChoices = roles.map((role) => ({
                    name: role.title,
                    value: role.id,    
                }));
                return roleChoices;
            }catch (error) {
                console.error('Error fetching roles:', error);
            }
        }
    },
];

const allQuestions = [...questions, ...followUPQuestions];

module.exports = allQuestions;