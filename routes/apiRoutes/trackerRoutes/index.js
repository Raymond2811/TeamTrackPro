const router = require('express').Router();
const {getDepartments,} = require('../../../controllers/trackerControllers.js')


router.route('/departments')
    .get(getDepartments);


module.exports = router;