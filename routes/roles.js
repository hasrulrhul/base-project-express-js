var express = require('express');
var router = express.Router();
var RoleController = require('../app/controllers/RoleController');


/* GET users listing. */
router.get('/', RoleController.index);
router.post('/', RoleController.create);
router.get('/:id', RoleController.show);
router.put('/:id', RoleController.edit);
router.delete('/:id', RoleController.delete);

module.exports = router;