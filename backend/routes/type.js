const router = require('express').Router();

const ctrl = require('../controller/typeController');

router.post('/new-type' , ctrl.addType);
router.delete('/delete-type/:id' , ctrl.deleteType);
router.get('/get-type/:id' , ctrl.getOneType);
router.patch('/update-type/:id' , ctrl.modifyType);
router.get('/get-types' , ctrl.getAllTypes);

module.exports = router;