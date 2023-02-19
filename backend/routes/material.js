const router = require('express').Router();

const m_auth = require('../middleware/authentication');
const ctrl = require('../controller/materialController');

router.post('/new-material' , ctrl.addMaterial);
router.delete('/delete-material/:id' , ctrl.deleteMaterial);
router.get('/get-material/:id' , ctrl.getOneMaterial);
router.patch('/update-material/:id' , ctrl.modifyMaterial);
router.get('/get-materials' , ctrl.getAllMaterials);

module.exports = router;