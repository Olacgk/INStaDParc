const router = require('express').Router();

const m_auth = require('../middleware/authentication');
const ctrl = require('../controller/userController');

router.post('/login' , ctrl.login);
 
module.exports = router;
