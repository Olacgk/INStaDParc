const router = require('express').Router();

const m_auth = require('../middleware/authentication');
const ctrl = require('../controller/userController');


router.post('/new-user' , ctrl.addUser);
router.delete('/delete-user/:id' , ctrl.deleteUser);
router.get('/get-user/:id' , ctrl.getOneUser);
router.patch('/update-user/:id' , ctrl.modifyUser);
router.get('/get-users' , ctrl.getAllUsers);
 
module.exports = router;
