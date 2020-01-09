const express = require('express');
const router = express.Router();

const controller = require('../controller/controller');
router.get('/', controller.indexTask);

router.get('/:id/update', controller.update);

router.get('/:id/delete', controller.delete);

router.get('/:id/complete', controller.complete);

router.post('/create', controller.createPost);

router.post('/:id/update', controller.updatePost);

router.post('/:id/complete', controller.completePost)

module.exports = router;