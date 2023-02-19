const router = require('express').Router();

const ctrl = require('../controller/marqueController');

router.post('/new-marque' , ctrl.addMarque);
router.delete('/delete-marque/:id' , ctrl.deleteMarque);
router.get('/get-marque/:id' , ctrl.getOneMarque);
router.patch('/update-marque/:id' , ctrl.modifyMarque);
router.get('/get-marques' , ctrl.getAllMarques);

module.exports = router;