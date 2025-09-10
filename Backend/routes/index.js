const express= require('express');
const router = express.Router();

router.use('/auth', require('./authRoutes'));
router.use('/routes', require('./routeManagement'));
router.use('/bus',require('./busRoutes'))
router.use('/ticket',require('./tickets'))
router.use('/dashboard',require('./dashboardRoutes'))
router.use('/package',require('./packageRoutes'))
router.use('/tracking',require('./trackingRoutes'))
router.use('/pos',require('./posRoutes'))
router.use('/trip',require('./tripRoutes'))
router.use('/user',require('./userRoutes'))
router.use('/report',require('./reportRoute'))
module.exports = router;