const router = require('express').Router();
const {getDepartments, getEmployee, getRole, addDepartment} = require('../../../controllers/trackerControllers.js');


router.route('/departments')
    .get(getDepartments)
    .post(addDepartment);

router.route('/employees')
    .get(getEmployee)

router.route('/roles')
    .get(getRole)
    
module.exports = router;