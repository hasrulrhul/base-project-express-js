var express = require('express');
var router = express.Router();
var OptionController = require('../app/controllers/OptionController');


/* GET users listing. */
router.get('/', OptionController.index);
router.post('/', OptionController.create);
router.get('/:id', OptionController.show);
router.put('/:id', OptionController.edit);
router.delete('/:id', OptionController.delete);

module.exports = router;