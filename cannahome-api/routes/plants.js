const router = require('express').Router();
const controllers = require('../controllers');

router.get('/', controllers.plants.index);

router.get('/:id', controllers.plants.show);

router.post('/', controllers.plants.create);

router.put('/:id', controllers.plants.update);

router.delete('/:id', controllers.plants.destroy);

module.exports = router;
