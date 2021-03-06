const router = require('express').Router();
const controllers = require('../controllers');

router.get('/filter/:plantId', controllers.waterings.index);

router.get('/:id', controllers.waterings.show);

router.post('/', controllers.waterings.create);

router.put('/:id', controllers.waterings.update);

router.delete('/:id', controllers.waterings.destroy);

module.exports = router;
