var express = require('express');
var router = express.Router();
var UserMenuController = require('../app/controllers/UserMenuController');


/* GET users listing. */
router.get('/', UserMenuController.index);
router.post('/', UserMenuController.create);
router.get('/:id', UserMenuController.show);
router.put('/:id', UserMenuController.edit);
router.delete('/:id', UserMenuController.delete);

module.exports = router;