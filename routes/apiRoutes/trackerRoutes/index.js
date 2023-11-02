const router = require('express').Router();
const {getDepartments, getEmployee, getRole, addDepartment, addRole,} = require('../../../controllers/trackerControllers.js');


router.route('/departments')
    .get(getDepartments)
    .post(addDepartment);

router.route('/employees')
    .get(getEmployee)

router.route('/roles')
    .get(getRole)
    .post(addRole);
    
module.exports = router;