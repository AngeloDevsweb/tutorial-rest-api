const {Router} = require('express')
const router = Router();

const {getCafe, getOneCafe, createCafe, updateCafe, deleteCafe} = require('../controllers/cafe.controller')

router.route('/')
    .get(getCafe)
    .post(createCafe)

router.route('/:id')
    .get(getOneCafe)
    .delete(deleteCafe)
    .put(updateCafe)


module.exports = router;