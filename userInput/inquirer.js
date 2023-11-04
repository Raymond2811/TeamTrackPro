const inquirer = require('inquirer');
const axios = require('axios');
const allQuestions = require('./questions.js');

function init() {
    inquirer.prompt(allQuestions).then(async(answers) => {
        const answerData = answers.tracker.split(' ');
        // answer.Data = ['View','All','Departments']
        
        if(answerData[0] === 'View'){
            try{
                const response = await axios.get('http://localhost:3001/api/tracker/'+ answerData[2].toLowerCase());
                const view = response.data;
                console.table(view);
            }catch(error){
                console.error('Error fetching table:',error);
            }
        };

        if(answerData[0] === 'Add'){
            try{
                if(answerData[1] === 'Department'){
                    const newDepartment = answers.departmentName;
                    await axios.post('http://localhost:3001/api/tracker/departments',{
                        newDepartment: newDepartment
                    });
                    console.log('Department added successfully');
                }
                if(answerData[1] === 'Role'){
                    const { roleName, roleSalary, roleDepartment } = answers;
                    await axios.post('http://localhost:3001/api/tracker/roles',{
                        roleName: roleName,
                        roleSalary: roleSalary,
                        roleDepartment: roleDepartment,
                    });
                    console.log('Role added successfully');
                }
                if(answerData[1] === 'Employee'){
                    const {employeeFirstName,employeeLastName,employeeRole,employeeManager} = answers;
                    await axios.post('http://localhost:3001/api/tracker/employees',{
                        first_name: employeeFirstName,
                        last_name: employeeLastName,
                        role_id: employeeRole,
                        manager_id: employeeManager,
                    });
                    console.log('Employee added successfully');
                }
            }catch(error){
                console.error('Error adding data:', error);
            }
        };

        if(answerData[0] === 'Update'){
            try{
                const {selectedEmployee,updatedRole} = answers;
                await axios.put('http://localhost:3001/api/tracker/employees',{
                    employeeId: selectedEmployee,
                    roleId: updatedRole,
                });
                console.log('Employee role updated successfully');
            }catch(error){
                console.error('Error updating employee:',error);
            }
        };

        if(answers.tracker === 'Quit'){
            console.log('Exiting the app');
            process.exit(0);
        }else{
            init();
        };
    })
};

init();