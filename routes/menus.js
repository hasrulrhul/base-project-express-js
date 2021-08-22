var express = require('express');
var router = express.Router();
var MenuController = require('../app/controllers/MenuController');


/* GET users listing. */
router.get('/', MenuController.index);
router.post('/', MenuController.create);
router.get('/:id', MenuController.show);
router.put('/:id', MenuController.edit);
router.delete('/:id', MenuController.delete);

module.exports = router;