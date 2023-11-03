const router = require('express').Router();
const {getDepartments, getEmployee, getRole, addDepartment, addRole, addEmployee,} = require('../../../controllers/trackerControllers.js');


router.route('/departments')
    .get(getDepartments)
    .post(addDepartment);

router.route('/employees')
    .get(getEmployee)
    .post(addEmployee);

router.route('/roles')
    .get(getRole)
    .post(addRole);
    
module.exports = router;