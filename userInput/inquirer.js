const inquirer = require('inquirer');
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
        type:'input',
        name:'employeeRole',
        message:'Enter role of the employee:',
        when: (answers) => answers.tracker === 'Add Employee',
    },
    {
        type:'input',
        name:'employeeManager',
        message: 'Enter manager of the employee:',
        when: (answers) => answers.tracker === 'Add Employee',
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
        type:'input',
        name:'roleDepartment',
        message:" Enter role's department:",
        when: (answers) => answers.tracker === 'Add Role', 
    }
];

const allQuestions = [...questions, ...followUPQuestions];

function init() {
    inquirer.prompt(allQuestions).then(async(answers) => {
        const answerData = answers.tracker.split(' ');
        // answer.Data = ['View','All','Departments']
        
        if(answerData[0] === 'View'){
            try{
                const response = await axios.get('http://localhost:3001/api/tracker/'+ answerData[2].toLowerCase());
                const view = response.data;
                // const departments = await response.json();
                console.table(view);
            }catch(error){
                console.error('Error fetching table:',error);
            }
        }

        if(answers.tracker === 'Quit'){
            console.log('Exiting the app');
            process.exit(0);
        }else{
            init();
        }
    })
};

init();