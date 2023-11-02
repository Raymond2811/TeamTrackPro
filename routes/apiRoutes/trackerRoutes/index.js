const router = require('express').Router();
const {getDepartments, getEmployee, getRole} = require('../../../controllers/trackerControllers.js');


router.route('/departments')
    .get(getDepartments)

router.route('/employees')
    .get(getEmployee)

router.route('/roles')
    .get(getRole)
    
module.exports = router;