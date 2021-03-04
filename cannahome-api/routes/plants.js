const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', controllers.pets.index);


module.exports = router;
