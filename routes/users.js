var express = require('express');
var router = express.Router();
var UserController = require('../app/controllers/UserController');


/* GET users listing. */
router.get('/', UserController.index);
router.post('/', UserController.create);
router.get('/:id', UserController.show);
router.put('/:id', UserController.edit);
router.delete('/:id', UserController.delete);

module.exports = router;