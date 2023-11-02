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
        SELECT role.title, role.salary, departments.department 
        FROM role 
        JOIN departments ON role.department_id = departments.id;
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
        res.json(result);
    }catch(error){
        console.log(error);
        res.status(500).json({error});
    }
};

module.exports = {
    getDepartments,
    getEmployee,
    getRole,
    addDepartment,
}