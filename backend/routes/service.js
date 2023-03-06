const router = require('express').Router();

const m_auth = require('../middleware/authentication');
const ctrl = require('../controller/serviceController');

router.post('/new-service' , ctrl.addService);
router.get('/get-services' , ctrl.getAllServices);
router.get('/get-service/:id' , ctrl.getOneService);
router.get('/serviceByDir/:id', ctrl.getServicesByDirection);

module.exports = router;