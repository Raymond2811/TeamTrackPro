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
        const result = await connection.query('SELECT * FROM employee;');
        res.json(result[0]);
    }catch(error){
        console.log(error);
        res.status(500).json({error});
    }
};

const getRole = async (req,res) => {
    try{
        const result = await connection.query('SELECT * FROM role JOIN departments ON role.department_id = departments.id;');
        res.json(result[0]);
    }catch(error){
        console.log(error);
        res.status(500).json({error});
    }
};

module.exports = {
    getDepartments,
    getEmployee,
    getRole,
}