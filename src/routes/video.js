const {Router} = require('express')
const router = Router();

const {getVideo, createVideo, deleteVideo} = require('../controllers/video.controller')

router.route('/')
    .get(getVideo)
    .post(createVideo)

router.route('/:id')
    .delete(deleteVideo)

module.exports = router;