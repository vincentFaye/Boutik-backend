const express = require('express');
const router = express.Router();

const { createThing, deleteThing, getOneThing, getThings, modifyThing } = require('../controllers/stuff');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, createThing);
router.get('/:id', auth, getOneThing);
router.put('/:id', auth, multer, modifyThing);
router.delete('/:id', auth, deleteThing);
router.get('/' + '', auth, getThings);

module.exports = router;
