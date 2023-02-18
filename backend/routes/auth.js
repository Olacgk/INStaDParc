const router = require('express').Router();

const m_auth = require('../middleware/authentication');
const ctrl = require('../controller/userController');

router.post('/new-user' , m_auth, ctrl.addUser);
router.post('/login' , ctrl.login);

module.exports = router;
