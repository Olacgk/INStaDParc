const router = require('express').Router();

const m_auth = require('../middleware/authentication');
const ctrl = require('../controller/directionController');

router.post('/new-direction', ctrl.addDirection)
router.get('/get-directions', ctrl.getAllDirections)
router.get('/get-direction/:id', ctrl.getOneDirection)
router.get('/dirId', ctrl.getIdByAbbrv)

module.exports = router;