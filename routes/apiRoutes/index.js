const router = require('express').Router();
const trackerRoutes = require('./trackerRoutes');

router.use('/tracker',trackerRoutes);

module.exports = router;