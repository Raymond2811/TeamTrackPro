const connection = require('../config/connection');

const getDepartments = async (req,res) => {
    try{
        const result = await connection.query('SELECT * FROM departments;');
        console.log(result);
        res.json(result[0]);
    }catch(error){
        console.log(error);
        res.status(500).json({error});
    }
};

const getEmployee = async (req,res) => {
    try{
        const result = await connection.query(`
        SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, departments.department, employee.manager_id
        FROM employee
        JOIN role ON employee.role_id = role.id
        JOIN departments ON role.department_id = departments.id
        ORDER BY employee.id;
      `);
        res.json(result[0]);
    }catch(error){
        console.log(error);
        res.status(500).json({error});
    }
};

const getRole = async (req,res) => {
    try{
        const result = await connection.query(`
        SELECT role.id, role.title, role.salary, departments.department 
        FROM role 
        JOIN departments ON role.department_id = departments.id
        ORDER BY role.id;
        `);
        res.json(result[0]);
    }catch(error){
        console.log(error);
        res.status(500).json({error});
    }
};

const addDepartment = async (req,res) => {
    const {newDepartment} = req.body;
    try{
        const [result] = await connection.query('INSERT INTO departments (department) VALUES (?);', [newDepartment]);
        res.json({ message: 'Department added successfully', result });
    }catch(error){
        console.log(error);
        res.status(500).json({error});
    }
};

const addRole = async(req,res) => {
    const {roleName, roleSalary, roleDepartment} =req.body;
    try{
        const [result] = await connection.query('INSERT INTO role (title, salary, department_id) VALUES (?,?,?);',[roleName, roleSalary, roleDepartment]);
        res.json({ message: 'Role added successfully', result });
    }catch(error){
        console.log(error);
        res.status(500).json({error});
    }
};

const addEmployee = async(req,res) => {
    const {first_name, last_name, role_id, manager_id } = req.body;
    try{
        const [result] = await connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);',[first_name, last_name, role_id, manager_id ]);
        res.json({ message: 'Employee added successfully', result });
    }catch(error){
        console.log(error);
        res.status(500).json({error});
    }
};

const updateEmployeeRole = async(req,res) => {
    const {employeeId, roleId} = req.body;
    try {
        const [result] = await connection.query(
            'UPDATE employee SET role_id = ? WHERE id = ?',
            [roleId,employeeId,]
        );
        res.json({ message: 'Employee updated successfully', result });
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
};

module.exports = {
    getDepartments,
    getEmployee,
    getRole,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole,
}